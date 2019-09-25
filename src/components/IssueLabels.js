import React from 'react';

function IssueLabels(props) {
  const { labels } = props;
  const labelList = labels.map (label => {
    if (label !== {}) {
        return(<div key={label.id} className='issue-label-wrapper'>
          <div className='issue-label-hole'/>
          <div className='issue-label'>{label.name}</div>
          </div>)
    } else {
        return(<div></div>)
    }
  });
  return (
    <div className='issue-labels-container'>{labelList}</div>
    )
}

export default IssueLabels;
