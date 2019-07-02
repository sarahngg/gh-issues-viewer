import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoSearchPage from './RepoSearchPage';
import IssueDisplayPage from './IssueDisplayPage';

// const App = () => { 
//   return (
//   <div className="repo-search-page">
//     <RepoSearchPage/>
//   </div>
//   );
// }

class App extends Component { 
  
  render () {
    if (this.props.repoLink === '') {
      return (
      <div className="repo-search-page-container">
        <RepoSearchPage/>
      </div>
      );
    } else {
      return (
      <div className="issue-display-page-container">
        <IssueDisplayPage/>
      </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  repoLink: state.repoLink,
});
export default connect(mapStateToProps)(App);
