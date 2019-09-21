import React, { useState } from 'react';
import closeIcon from '../_assets/icons/close.svg';
import { useDispatch } from 'react-redux';
import { closeIssueViewer, setFilter } from '../actions';
import { FILTERS } from '../constants/constants';

function IssuePageFilter () {
  const selectedStyle = 'issue-page-filter-selected';
  const unselectedStyle = 'issue-page-filter-unselected';
  const [filterStyle, setFilterStyle] = useState(FILTERS);

  const dispatch = useDispatch();

  const handleCloseViewer = () => {
    dispatch(closeIssueViewer());
  }

  const handleClick = (e) => {
    let selectedFilter = e.currentTarget.getAttribute('id');
    dispatch(setFilter(selectedFilter));
    console.log('selected', selectedFilter);
    filterStyle.forEach((filter) => {
      if (selectedFilter === filter.type) {
        // change filter to selected
        filter.isSelected = true;
      } else {
        // change filter to unselected
        filter.isSelected = false;
      }
    })
  };

  const filterButtons = filterStyle.map(filter => 
    <button 
      onClick={handleClick}
      key={filter.type} 
      id={filter.type} 
      className={filter.isSelected ? selectedStyle : unselectedStyle}>{filter.title}
    </button>
  )

  return (
      <div className='issue-page-filter-container'>
        {filterButtons}
        <button key='exit' id='exit-button' onClick={handleCloseViewer}> 
          <img src={closeIcon} className='close-icon' alt='Close issue viewer' />
        </button>
      </div>
  )
}

export default IssuePageFilter;

