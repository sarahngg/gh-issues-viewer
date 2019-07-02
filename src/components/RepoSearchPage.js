import RepoSearchBar from './RepoSearchBar';
import React, { Component } from 'react';

class RepoSearchPage extends Component {
  render() {
    return(
    <div className="repo-search-page-content">
      <h1>GitHub Issue Explorer</h1>
      <RepoSearchBar/>
      </div>
      )
  }
}
export default RepoSearchPage;