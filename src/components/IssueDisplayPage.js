import React, { Component } from 'react';
import Issue from './Issue';
class IssueDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      issues: [
      { key: 1, title: "Issue 1", body: "The deets", isPullRequest: false, labels: ["bug", "priority"]},
      { key: 2, title: "Issue 2", body: "This is actually a pull request", isPullRequest: true, labels: ["bug"]},
      { key: 3, title: "Issue 3", body: "Bug", isPullRequest: false, labels: ["bug"]},
      { key: 4, title: "Issue 4", body: "Help me", isPullRequest: false, labels: ["bug"]},
      { key: 5, title: "Issue 5", body: "Another issue", isPullRequest: false, labels: ["bug"]},
      { key: 6, title: "Issue 6", body: "So many bugs", isPullRequest: false, labels: ["bug"]},
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
    <div className="center issues-wrapper">
      <h1>IssueDisplayPage</h1>
      {issueList}
      </div>
      )
  }
}
export default IssueDisplayPage;