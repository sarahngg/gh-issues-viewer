import React, {Component} from 'react';

class IssueLabels extends Component {
  render() {
    const { labels } = this.props;
    const labelList = labels.map (label => {
      if (label !== {}) {
          return(<div className="issue-label-wrapper">
            <div className="issue-label-hole"/>
            <div className="issue-label">{label}</div>
            </div>)
      } else {
          return(<div></div>)
      }
    });
    return (
      <div className="issue-labels-container">{labelList}</div>
      )
  }
}

export default IssueLabels;
