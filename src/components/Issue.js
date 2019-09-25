import React from 'react';
import { useSelector } from 'react-redux';
import IssueLabels from './IssueLabels';
import { ReactComponent as IssueClosedIcon } from '../_assets/icons/issue-closed.svg';
import { ReactComponent as PullRequestIcon } from '../_assets/icons/pull-request.svg';
import { NO_DESCRIPTION_TEXT } from '../constants/constants';

function Issue (props) {
  const filterSelected = useSelector(state => state.filterSelected);
  const { state, pullRequest, title, body, labels } = props;
  
  const getIssueBody = () => {
    if (body === '') {
      return (<div className='card-body-text card-body-text-empty'>{NO_DESCRIPTION_TEXT}</div>);
    } else {
      return (<div className='card-body-text'>{body}</div>);
    }
  }  

  const getIcon = () => {
    if (filterSelected !== 'pulls' && typeof pullRequest === 'undefined' && state === 'closed') {
      return <IssueClosedIcon className='icon'/>
    } 
    if (filterSelected === 'pulls' || (filterSelected !== 'pulls' && typeof pullRequest !== 'undefined'))  {
      return <PullRequestIcon className='icon'/>
    }
    return <div></div>;
  }
    
  return (
    <div className='card-wrapper'>
      <div className='card-title'>
        <div className='card-title-text'>
          {title}
        </div>
        <div className='svg-wrapper issue-icon'>
          {getIcon()}
        </div>
      </div>
      <div className='card-details'>
        {getIssueBody()} 
        <IssueLabels labels={labels}/>
      </div>
    </div>
  )
}

export default Issue;
