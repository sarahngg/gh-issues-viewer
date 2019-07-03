import React, {Component} from 'react';
import IssueLabels from './IssueLabels';

class Issue extends Component {
  render() {
    const { title, body, labels } = this.props;
    if (body === "") {
      var issueBody = <div className="issue-body-text issue-body-text-empty">No description provided.</div>
    } else {
      var issueBody = <div className="issue-body-text">{body}</div>
    }
    return ( 
    <div  className="issue-wrapper">
      <div className="issue-title">{title}</div>
      <div className="issue-details">
        {issueBody} 
      <IssueLabels labels={labels}/>
      </div>
    </div>
  )}
}

export default Issue;
