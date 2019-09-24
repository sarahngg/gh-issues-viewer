import RepoSearchBar from './RepoSearchBar';
import React from 'react';
import { APP_NAME } from '../constants/constants';

function RepoSearchPage() {
  return(
    <div className='repo-search-page-content'>
      <h1>{ APP_NAME }</h1>
      <RepoSearchBar/>
      </div>
  )
}
export default RepoSearchPage;