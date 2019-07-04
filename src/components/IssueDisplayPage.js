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
    // console.log('componentDidMount');
    if (user !== null && repoName != null) {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/issues'+ '?state=all')
        .then(res => {
          this.props.loadIssues(res.data);
          console.log('filterSelected !== pulls');
      })
     }
    }
  
  componentDidUpdate(prevProps) {
    if (this.props.filterSelected !== prevProps.filterSelected) {
      // console.log('componentDidUpdate');
      const user = this.props.user;
      const repoName = this.props.repoName;
      if (this.props.filterSelected !== 'pulls') {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/issues'+ '?state=' + this.props.filterSelected)
        .then(res => {
          this.props.loadIssues(res.data);
          // console.log('filterSelected ===' , this.props.filterSelected);
        })
      } else {
        axios.get('https://api.github.com/repos/' + user + '/' + repoName + '/pulls' + '?state=all')
        .then(res => {
          this.props.loadIssues(res.data);
          // console.log('filterSelected === pulls')
        })
      }
      
    }
  }
  render() {

    // console.log('repoName', this.props.repoName);
    // console.log('user', this.props.user);

    let issueList = this.props.issues;
    // console.log('issueList', issueList);
    // console.log('issueList.length === 0', issueList.length === 0);
    if (issueList.length === 0) {
      issueList = <div>No issues!</div>
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
      // switch(this.props.filterSelected) {
      // case 'closed': {
      //   console.log('filtering closed issues');
      //   issueList = this.props.issues.map (issue => {
      //     if (issue !== null && issue.pull_request === undefined && issue.state === 'closed') {
      //         return(
      //         <Issue key={issue.id} state={issue.state} isPullRequest='false' title={issue.title} body={issue.body} labels={issue.labels}/>
      //         )
      //     } else {
      //         return(
      //         <div></div>
      //         )
      //     }
      //   })
      // }  
      // break;
      // case 'open': {
      //   console.log('filtering open issues');
      //   issueList = this.props.issues.map (issue => {
      //     if (issue !== null && issue.pull_request === undefined && issue.state === 'open') {
      //         return(
      //         <Issue key={issue.id} state={issue.state} isPullRequest='false' title={issue.title} body={issue.body} labels={issue.labels}/>
      //         )
      //     } else {
      //         return(
      //         <div></div>
      //         )
      //     }
      //   })
      // }  
      // break;
      // case 'pulls': {
      //   console.log('filtering pulls');
      //   issueList = this.props.issues.map (issue => {
      //     if (issue !== null && issue.pull_request !== undefined) {
      //         return(
      //         <Issue key={issue.id} state={issue.state} isPullRequest='true' title={issue.title} body={issue.body} labels={issue.labels}/>
      //         )
      //     } else {
      //         return(
      //         <div></div>
      //         )
      //     }
      //   })
      // }  
      // break;
      // default: {
      //   issueList = this.props.issues.map (issue => {
      //     if (issue !== null) {
      //         return(
      //         <Issue key={issue.id} state={issue.state} isPullRequest={issue.pull_request} title={issue.title} body={issue.body} labels={issue.labels}/>
      //         )
      //     } else {
      //         return(
      //         <div></div>
      //         )
      //     }
      //   })
      // }
      // }
    

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