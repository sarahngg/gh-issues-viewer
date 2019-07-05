import React, { Component } from 'react';
import { connect } from 'react-redux';
import Issue from './Issue';
import IssuePageFilter from './IssuePageFilter';
import Pagination from './Pagination'
import { loadIssues } from '../actions';
import axios from 'axios';

class IssueDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
    }
  }
  componentDidMount() {
    const user = this.props.user;
    const repoName = this.props.repoName;
    if (user !== null && repoName != null) {
      axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/issues?state=all')
      .then(res => {
        this.props.loadIssues(res.data);
        this.setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      })
      .catch(error => {
        if (error.response) {
          this.setState((prevState) => ({
            ...prevState,
            error: error.message,
          }));
        }
      });
    } else {
      this.setState((prevState) => ({
        ...prevState,
        error: 'Invalid user and/or repo name.',
        }));
      } 
  }
  
  componentDidUpdate(prevProps, prevState) {
    
    if (this.props.filterSelected !== prevProps.filterSelected || this.props.page !== prevProps.page || 
      (this.state.isLoading !== prevState.isLoading && this.state.isLoading === prevState.isLoading)) {
        this.setState((prevState) => ({
          ...prevState,
          isLoading: true,
        }));
      const user = this.props.user;
      const repoName = this.props.repoName;
      let url; 
      if (this.props.filterSelected !== 'pulls') {
        url = 'https://api.github.com/repos/' + user + '/' + repoName + '/issues'+ 
        '?page=' + this.props.page + '&state=' + this.props.filterSelected
      } else {
        url = 'https://api.github.com/repos/' + user + '/' + repoName + '/pulls' + 
        '?page=' + this.props.page + '&state=all'
      }
      axios.get(url)
      .then(res => {
        this.props.loadIssues(res.data);
        this.setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
        window.scrollTo(0, 0);
      })
      .catch(error => {
        if (error.response) {
          this.setState((prevState) => ({
            ...prevState,
            error: error.message,
          }));
        }
      });
    }
  }
  render() {
    let result = this.props.issues;
    if (this.state.error !== null) {
      result = 
      <div className='issue-page-display-message'>
        We ran into some issues :(
        <br/>{this.state.error}
        </div>
    } else if (this.state.isLoading === true) {
      result = <div className='loader'></div>
    } else if (result.length === 0) {
      result = 
      <div className='issue-page-display-message'>
        No issues found.
        </div>
    } else {
      var issueList = this.props.issues.map (issue => {
        if (issue !== null) {
            return(
            <Issue key={issue.id} state={issue.state} pullRequest={issue.pull_request} title={issue.title} body={issue.body} labels={issue.labels}/>
            )
        } else {
            return(
            <div></div>
            )
        }
      })
      result = <div className='issues-container'>{issueList}</div>
    }

    return(
    <div>
      <div className='sticky-top'>
      <div className='issues-page-header'>
        <div className='issue-page-header-text'>GitHub Issue Viewer</div>
        <div className='issue-page-header-link'>{this.props.repoLink}</div>
      </div>
      <IssuePageFilter />
      </div>
      <div className='min-height-set-wrapper'>
      {result}
      </div>
      <Pagination />
      </div>
      
      )
  }
}
const mapStateToProps = state => ({
  repoLink: state.repoLink,
  user: state.user,
  repoName: state.repoName,
  issues: state.issues,
  filterSelected: state.filterSelected,
  page: state.page,
});
export default connect(mapStateToProps, {loadIssues})(IssueDisplayPage);