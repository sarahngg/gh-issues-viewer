import React, {Component} from 'react';
import IssueLabels from './IssueLabels';

class Issue extends Component {
  render() {
    const { key, title, body, isPullRequest, labels } = this.props;
    return ( 
    <div className="issue-wrapper">
      <div className="issue-title"><h2>{title}</h2></div>
      <div className="issue-details">{body} 
      <IssueLabels labels={labels}/>
      </div>
    </div>
  )}
}

export default Issue;
