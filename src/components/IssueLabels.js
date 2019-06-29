import React, {Component} from 'react'

class IssueLabels extends Component {
  render() {
    const { labels } = this.props;
    const labelList = labels.map (label => {
      if (label !== {}) {
          return(<div>{label}</div>)
      } else {
          return(<div></div>)
      }
    });
    return (
      <div>tag: {labelList}</div>
      )
  }
}

export default IssueLabels;
