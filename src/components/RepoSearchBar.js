 import React, { Component } from 'react';
 import icon from '../_assets/icons/search.svg';
 import '../App.css';
 
 class RepoSearchBar extends Component {
  constructor() {
    super();
    this.state = {repoLink: ''};
  }
  handleFormChange =(e)=> {
      this.setState({
        repoLink: e.target.value
      });
  }
  handleSubmit =(e)=> {
      e.preventDefault(); 
      console.log("Form submitted!", this.state.repoLink);
  }
   render() {
     return <div className="repo-search-bar">
       <form onSubmit = {this.handleSubmit}>
       <img src = {icon} className="search-icon" alt="Search icon" />
       <input 
          type='text' 
          onChange={this.handleFormChange} 
          value={this.state.repoLink}
          className="gitHubLink" 
          placeholder="Paste a link to a GitHub repo!"/>
       </form>
       </div>
   }
 }
 export default RepoSearchBar;