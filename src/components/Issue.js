import React from 'react';
import { useSelector } from 'react-redux';
import IssueLabels from './IssueLabels';
import { ReactComponent as IssueClosedIcon } from '../_assets/icons/issue-closed.svg';
import { ReactComponent as PullRequestIcon } from '../_assets/icons/pull-request.svg';

function Issue(props) {
  const filterSelected = useSelector(state => state.filterSelected);
  const { state, pullRequest, title, body, labels } = props;
  
  let issueBody;
  if (body === '') {
    issueBody = <div className='card-body-text card-body-text-empty'>No description provided.</div>
  } else {
    issueBody = <div className='card-body-text'>{body}</div>
  }

  let icon = <div></div>;
  if (typeof pullRequest === 'undefined' && state === 'closed') {
    icon = <IssueClosedIcon className='icon'/>
  } 
  if (filterSelected === 'pulls' || (filterSelected !== 'pulls' && typeof pullRequest !== 'undefined'))  {
    icon = <PullRequestIcon className='icon'/>
  }
    
  return (
  <div className='card-wrapper'>
    <div className='card-title'>
      <div className='card-title-text'>
      {title}
      </div>
      <div className='svg-wrapper issue-icon'>
        {icon}
      </div>
      </div>
    <div className='card-details'>
      {issueBody} 
    <IssueLabels labels={labels}/>
    </div>
  </div>
  )
}

export default Issue;
