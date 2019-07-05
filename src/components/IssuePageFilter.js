import React, {Component} from 'react';
import closeIcon from '../_assets/icons/close.svg';
import { connect } from 'react-redux';
import { closeIssueViewer, setFilter } from '../actions';

class IssuePageFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStyle: {
        all: 'issue-page-filter-selected',
        open: 'issue-page-filter-unselected',
        closed: 'issue-page-filter-unselected',
        pulls: 'issue-page-filter-unselected',
      }
    }
  }
  handleCloseViewer = (e) => {
    this.props.closeIssueViewer();
  }

  handleClick = (e) => {
    switch (e.target.getAttribute('id')) {
      case 'all':
          this.props.setFilter('all');
          this.setState({
            filterStyle: {
              all: 'issue-page-filter-selected',
              open: 'issue-page-filter-unselected',
              closed: 'issue-page-filter-unselected',
              pulls: 'issue-page-filter-unselected',
            }
          });
          break;
      case 'open':
          this.props.setFilter('open');
          this.setState({
            filterStyle: {
              all: 'issue-page-filter-unselected',
              open: 'issue-page-filter-selected',
              closed: 'issue-page-filter-unselected',
              pulls: 'issue-page-filter-unselected',
            }
          });
          break;
      case 'closed':
          this.props.setFilter('closed');
          this.setState({
            filterStyle: {
              all: 'issue-page-filter-unselected',
              open: 'issue-page-filter-unselected',
              closed: 'issue-page-filter-selected',
              pulls: 'issue-page-filter-unselected',
            }
          });
          break;
      case 'pulls':
          this.props.setFilter('pulls');
          this.setState({
            filterStyle: {
              all: 'issue-page-filter-unselected',
              open: 'issue-page-filter-unselected',
              closed: 'issue-page-filter-unselected',
              pulls: 'issue-page-filter-selected',
            }
          });
          break;
      default:
          this.props.setFilter('all');
          this.setState({
            filterStyle: {
              all: 'issue-page-filter-unselected',
              open: 'issue-page-filter-unselected',
              closed: 'issue-page-filter-unselected',
              pulls: 'issue-page-filter-unselected',
            }
          });
    }
    
  }


  render() {
    return (
      <div onClick={this.handleClick} className='issue-page-filter-container'>
        <button id='all' className={this.state.filterStyle.all}>All Issues</button>
        <button id='open' className={this.state.filterStyle.open}>Open Issues</button>
        <button id='closed' className={this.state.filterStyle.closed}>Closed Issues</button>
        <button id='pulls' className={this.state.filterStyle.pulls}>Pull Requests</button>
        <button id='exit' onClick={this.handleCloseViewer}> 
          <img src = {closeIcon} className='close-icon' alt='Close issue viewer' />
        </button>
      </div>
      )
  }
}

const mapStateToProps = state => ({
  filterSelected: state.filterSelected,
});
export default connect(mapStateToProps, {closeIssueViewer, setFilter})(IssuePageFilter);

