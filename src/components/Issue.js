import React, {Component} from 'react';
import { connect } from 'react-redux';
import IssueLabels from './IssueLabels';
import { ReactComponent as IssueClosedIcon } from '../_assets/icons/issue-closed.svg';
import { ReactComponent as PullRequestIcon } from '../_assets/icons/pull-request.svg';

class Issue extends Component {
  render() {
    const { title, body, labels } = this.props;
    
    let issueBody;
    if (body === '') {
      issueBody = <div className='card-body-text card-body-text-empty'>No description provided.</div>
    } else {
      issueBody = <div className='card-body-text'>{body}</div>
    }

    let icon = <div></div>;
    if (typeof this.props.pullRequest === 'undefined' && this.props.state === 'closed') {
      icon = <IssueClosedIcon className='icon'/>
    } 
    if (this.props.filterSelected === 'pulls' || (this.props.filterSelected !== 'pulls' && typeof this.props.pullRequest !== 'undefined'))  {
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
  )}
}
const mapStateToProps = state => ({
  filterSelected: state.filterSelected,
});
export default connect(mapStateToProps)(Issue);
