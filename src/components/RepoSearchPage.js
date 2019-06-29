import RepoSearchBar from './RepoSearchBar';
import React, { Component } from 'react';

class RepoSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { repoLink: "" };
  }
  render() {
    return(
    <div className="center">
      <h1>GitHub Issue Explorer</h1>
      <RepoSearchBar/>
      </div>
      )
  }
}
export default RepoSearchPage;