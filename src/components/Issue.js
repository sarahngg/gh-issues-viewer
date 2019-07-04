import React, {Component} from 'react';
import { connect } from 'react-redux';
import IssueLabels from './IssueLabels';
import { ReactComponent as IssueClosedIcon } from '../_assets/icons/issue-closed.svg';
import { ReactComponent as PullRequestIcon } from '../_assets/icons/pull-request.svg';

class Issue extends Component {
  render() {
    const { title, body, labels } = this.props;
    // console.log('typeof pullRequest',typeof pullRequest === 'undefined', 'state', state);
    
    if (body === '') {
      var issueBody = <div className='card-body-text card-body-text-empty'>No description provided.</div>
    } else {
      var issueBody = <div className='card-body-text'>{body}</div>
    }

    // var icon = <div></div>
    if (typeof this.props.pullRequest === 'undefined' && this.props.state === 'closed') {
      // console.log('Issue closed Icon');
      var icon = <IssueClosedIcon className='icon'/>
    } 
    if (typeof this.props.pullRequest === 'undefined' && this.props.state === 'open') {
      // console.log('Issue open');
      var icon = <div></div>
    }
    if (this.props.filterSelected === 'pulls' || (this.props.filterSelected !== 'pulls' && typeof this.props.pullRequest !== 'undefined'))  {
      // console.log('Pull request Icon');
      var icon = <PullRequestIcon className='icon'/>
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
