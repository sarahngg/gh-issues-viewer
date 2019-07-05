 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { submitRepoLink } from '../actions';
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
    if (this.state.repoLink !== '') {
      this.props.submitRepoLink(this.state.repoLink);
    } else {
      alert('Please paste a link to a GitHub repo.');
    }
  }
   render() {
     return <div className='repo-search-bar'>
  
       <img src = {icon} className='search-icon' alt='Search icon' />
       <form  
          onSubmit = {this.handleSubmit}>
       <input 
          type='text' 
          onChange={this.handleFormChange}
          value={this.state.repoLink}
          className='gitHubLink' 
          placeholder='Paste a link to a GitHub repo!'/>
          </form>
    
       </div>
   }
 }

const mapStateToProps = state => ({
  repoLink: state.repoLink,
});
 export default connect(mapStateToProps, {submitRepoLink})(RepoSearchBar);