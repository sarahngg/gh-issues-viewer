import React, {Component} from 'react';
import IssueLabels from './IssueLabels';

class Issue extends Component {
  render() {
    const { key, title, body, isPullRequest, labels } = this.props;
    return ( 
    <div className="an-issue">
      <h2>{title}</h2>
      <p>{body}</p> 
      <IssueLabels labels={labels}/>
    </div>
  )
  }
}

export default Issue;
