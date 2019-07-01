import React, {Component} from 'react';
import closeIcon from '../_assets/icons/close.svg';

class IssuePageFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelected: 'all',
      filterStyle: {
        all: 'issue-page-filter-selected',
        open: 'issue-page-filter-unselected',
        closed: 'issue-page-filter-unselected',
        pull: 'issue-page-filter-unselected',
      }
    }
  }
  handleCloseViewer = (e) => {
    console.log(e.target.getAttribute('id'));
  }

  handleClick = (e) => {
    console.log(e.target.getAttribute('id'));
    if (e.target.getAttribute('id') === 'all') {
      this.setState(prevState => ({
        ...prevState,
        filterSelected: 'all',
        filterStyle: {
          all: 'issue-page-filter-selected',
          open: 'issue-page-filter-unselected',
          closed: 'issue-page-filter-unselected',
          pull: 'issue-page-filter-unselected',
        }
      }));
    } else if (e.target.getAttribute('id') === 'open') {
      this.setState(prevState => ({
        ...prevState,
        filterSelected: 'open',
        filterStyle: {
          all: 'issue-page-filter-unselected',
          open: 'issue-page-filter-selected',
          closed: 'issue-page-filter-unselected',
          pull: 'issue-page-filter-unselected',
        }
      }));
    } else if (e.target.getAttribute('id') === 'closed') {
      this.setState(prevState => ({
        ...prevState,
        filterSelected: 'closed',
        filterStyle: {
          all: 'issue-page-filter-unselected',
          open: 'issue-page-filter-unselected',
          closed: 'issue-page-filter-selected',
          pull: 'issue-page-filter-unselected',
        }
      }));
    } else if (e.target.getAttribute('id') === 'pull') {
      this.setState(prevState => ({
        ...prevState,
        filterSelected: 'pull',
        filterStyle: {
          all: 'issue-page-filter-unselected',
          open: 'issue-page-filter-unselected',
          closed: 'issue-page-filter-unselected',
          pull: 'issue-page-filter-selected',
        }
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        filterStyle: {
          all: 'issue-page-filter-unselected',
          open: 'issue-page-filter-unselected',
          closed: 'issue-page-filter-unselected',
          pull: 'issue-page-filter-unselected',
        }
      }));
    }
  }


  render() {
    return (
      <div onClick={this.handleClick} className="issue-page-filter-container">
        <div id="all" className={this.state.filterStyle.all}>All issues</div>
        <div id="open" className={this.state.filterStyle.open}>Open Issues</div>
        <div id="closed" className={this.state.filterStyle.closed}>Closed Issues</div>
        <div id="pull" className={this.state.filterStyle.pull}>Pull Requests</div>
        <img id="exit" src = {closeIcon} className="close-icon" onClick={this.handleCloseViewer} alt="Close issue viewer" />
      </div>
      )
  }
}

export default IssuePageFilter;
