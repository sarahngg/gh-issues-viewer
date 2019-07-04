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
    console.log(e.target.getAttribute('id'));
    this.props.closeIssueViewer();
  }

  handleClick = (e) => {
    console.log(e.target.getAttribute('id'));
    if (e.target.getAttribute('id') === 'all') {
      this.props.setFilter('all');
      console.log('set filter to all');
      this.setState({
        filterStyle: {
          all: 'issue-page-filter-selected',
          open: 'issue-page-filter-unselected',
          closed: 'issue-page-filter-unselected',
          pulls: 'issue-page-filter-unselected',
        }
      });
    } else if (e.target.getAttribute('id') === 'open') {
      this.props.setFilter('open');
      console.log('set filter to open');
      this.setState({
        filterStyle: {
          all: 'issue-page-filter-unselected',
          open: 'issue-page-filter-selected',
          closed: 'issue-page-filter-unselected',
          pulls: 'issue-page-filter-unselected',
        }
      });
    } else if (e.target.getAttribute('id') === 'closed') {
      this.props.setFilter('closed');
      console.log('set filter to closed');
      this.setState({
        filterStyle: {
          all: 'issue-page-filter-unselected',
          open: 'issue-page-filter-unselected',
          closed: 'issue-page-filter-selected',
          pulls: 'issue-page-filter-unselected',
        }
      });
    } else if (e.target.getAttribute('id') === 'pulls') {
      this.props.setFilter('pulls');
      console.log('set filter to pulls');
      this.setState({
        filterStyle: {
          all: 'issue-page-filter-unselected',
          open: 'issue-page-filter-unselected',
          closed: 'issue-page-filter-unselected',
          pulls: 'issue-page-filter-selected',
        }
      });
    } else {
      this.props.setFilter('all');
      console.log('set filter to all');
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
      <div onClick={this.handleClick} className="issue-page-filter-container">
        <button id="all" className={this.state.filterStyle.all}>All issues</button>
        <button id="open" className={this.state.filterStyle.open}>Open Issues</button>
        <button id="closed" className={this.state.filterStyle.closed}>Closed Issues</button>
        <button id="pulls" className={this.state.filterStyle.pulls}>Pull Requests</button>
        <button id="exit" onClick={this.handleCloseViewer} alt="Close issue viewer"> 
          <img src = {closeIcon} className="close-icon" />
        </button>
      </div>
      )
  }
}

const mapStateToProps = state => ({
  filterSelected: state.filterSelected,
});
export default connect(mapStateToProps, {closeIssueViewer, setFilter})(IssuePageFilter);

