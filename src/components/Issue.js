import React, {Component} from 'react';
import IssueLabels from './IssueLabels';

class Issue extends Component {
  render() {
    const { key, title, body, isPullRequest, labels } = this.props;
    return ( 
    <div className="issue-wrapper">
      <div className="issue-title">{title}</div>
      <div className="issue-details">
        <div className="issue-body-text">{body}</div> 
      <IssueLabels labels={labels}/>
      </div>
    </div>
  )}
}

export default Issue;
