import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, previousPage } from '../actions';

function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.page);

  const handleClick = (e) => {
    switch (e.target.getAttribute('id')) {
      case 'prev':
        dispatch(previousPage());
        break;
      case 'next':
        dispatch(nextPage());
        break;
      default:
        break;
    }
  }

  return(
    <div className='pagination' onClick={handleClick}>
      <button id='prev'>&lt;</button>
         Page {currentPage}
      <button id='next'>&gt;</button>
    </div>
  )
}

export default Pagination;

