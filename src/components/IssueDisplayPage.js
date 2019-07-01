import React, { Component } from 'react';
import Issue from './Issue';
import IssuePageFilter from './IssuePageFilter';
class IssueDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      repoLink: "https://github.com/facebook/react",
      issues: [
      { key: 1, title: "Issue viewer issue number one is right here!", body: "Hi there, I notice you have a problem with the code in this repo. Can you please fix it? Please? Please? I am going to include all the details in this issue and I hope it does not get displayed in full.", isPullRequest: false, labels: ["bug", "priority"]},
      { key: 2, title: "Issue 2", body: "This is actually a pull request", isPullRequest: true, labels: ["bug"]},
      { key: 3, title: "This issue title is so long that I wonder if it should be fully displayed in this issue viewer", body: "The deets", isPullRequest: false, labels: ["bug"]},
      { key: 4, title: "Issue 4", body: "Help me", isPullRequest: false, labels: ["bug"]},
      { key: 5, title: "Issue 5", body: "Another issue", isPullRequest: false, labels: ["bug"]},
      { key: 6, title: "Issue 6", body: "Hi there, I notice you have a problem with the code in this repo. Can you please fix it? Please?", isPullRequest: false, labels: ["bug"]},
      { key: 7, title: "Issue 7 🐛", body: "Bug 🐞🐞", isPullRequest: false, labels: ["bug"]},
    ]

    };
  }
  
  render() {
    const issueList = this.state.issues.map (issue => {
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
        <div className="issue-page-header-link">{this.state.repoLink}</div>
      </div>
      <IssuePageFilter />
      <div className="issues-container">
      
      {issueList}
      </div>
      </div>
      )
  }
}
export default IssueDisplayPage;