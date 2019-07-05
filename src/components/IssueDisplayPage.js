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
    if (user !== null && repoName != null) {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/issues'+ '?state=all')
        .then(res => {
          this.props.loadIssues(res.data);
      })
     }
    }
  
  componentDidUpdate(prevProps) {
    if (this.props.filterSelected !== prevProps.filterSelected) {
      const user = this.props.user;
      const repoName = this.props.repoName;
      if (this.props.filterSelected !== 'pulls') {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/issues'+ '?state=' + this.props.filterSelected)
        .then(res => {
          this.props.loadIssues(res.data);
        })
        .then(window.scrollTo(0, 0));
      } else {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/pulls' + '?state=all')
        .then(res => {
          this.props.loadIssues(res.data);
        })
        .then(window.scrollTo(0, 0));
      }
      
    }
  }
  render() {
    let issueList = this.props.issues;
    if (issueList.length === 0) {
      issueList = <div className='no-issues'>No issues found.</div>
    } else {
      issueList = this.props.issues.map (issue => {
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