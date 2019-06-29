import React, { Component } from 'react';
import RepoSearchPage from './RepoSearchPage';
import IssueDisplayPage from './IssueDisplayPage';
import '../App.css';

// const App = () => { 
//   return (
//   <div className="repo-search-page">
//     <RepoSearchPage/>
//   </div>
//   );
// }

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { linkEntered: true };
  }
  render () {
    if (this.state.linkEntered === false) {
      return (
      <div className="repo-search-page">
        <RepoSearchPage/>
      </div>
      );
    } else {
      return (
      <div className="issue-display-page">
        <IssueDisplayPage/>
      </div>
      );
    }
  }
}
export default App;
