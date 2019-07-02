import React, { Component } from 'react';
import { connect } from 'react-redux';
import Issue from './Issue';
import IssuePageFilter from './IssuePageFilter';
class IssueDisplayPage extends Component {
  
  render() {
    console.log('repoName', this.props.repoName);
    console.log('user', this.props.user);
    const issueList = this.props.issues.map (issue => {
      if (issue !== {}) {
          return(<Issue key={issue.key} title={issue.title} body={issue.body} labels={issue.labels}/>)
      } else {
          return(<div></div>)
      }
    })

    return(
    <div>
      <div className="issues-page-header">
        <div className="issue-page-header-text">GitHub Issue Viewer</div>
        <div className="issue-page-header-link">{this.props.repoLink}</div>
      </div>
      <IssuePageFilter />
      <div className="issues-container">
      
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
});
export default connect(mapStateToProps)(IssueDisplayPage);