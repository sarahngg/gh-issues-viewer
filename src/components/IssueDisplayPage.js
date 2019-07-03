import React, { Component } from 'react';
import { connect } from 'react-redux';
import Issue from './Issue';
import IssuePageFilter from './IssuePageFilter';
import { loadIssues } from '../actions';
import axios from 'axios';

class IssueDisplayPage extends Component {
  componentDidMount() {
    const user = this.props.user;
    const repoName = this.props.repoName;
    console.log('componentDidMount');
    if (user !== null && repoName != null) {
      if (this.props.filterSelected !== 'pulls') {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/issues'+ '?state=' + this.props.filterSelected)
        .then(res => {
          this.props.loadIssues(res.data);
          console.log('filterSelected !== pulls');
        })
      } else {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/pulls')
        .then(res => {
          this.props.loadIssues(res.data);
          console.log('filterSelected === pulls')
        })
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.filterSelected !== prevProps.filterSelected) {

      console.log('componentDidUpdate');
      const user = this.props.user;
      const repoName = this.props.repoName;
      if (this.props.filterSelected !== 'pulls') {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/issues'+ '?state=' + this.props.filterSelected)
        .then(res => {
          this.props.loadIssues(res.data);
          console.log('filterSelected !== pulls');
        })
      } else {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/pulls')
        .then(res => {
          this.props.loadIssues(res.data);
          console.log('filterSelected === pulls')
        })
      }
      
    }
  }
  render() {

    console.log('repoName', this.props.repoName);
    console.log('user', this.props.user);

    let issueList = this.props.issues;
    console.log('issueList', issueList);
    console.log('issueList.length === 0', issueList.length === 0);
    if (issueList.length === 0) {
      issueList = <div>No issues!</div>
    } else {
      issueList = this.props.issues.map (issue => {
        if (issue !== {}) {
            return(
            <Issue key={issue.id} title={issue.title} body={issue.body} labels={issue.labels}/>
            )
        } else {
            return(
            <div></div>
            )
        }
      })
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
      <div className='issues-container'>
      {issueList}
      </div>
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
});
export default connect(mapStateToProps, {loadIssues})(IssueDisplayPage);