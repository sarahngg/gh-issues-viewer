 import React, { useState } from 'react';
 import { useSelector, useDispatch } from 'react-redux';
 import { submitRepoLink } from '../actions';
 import icon from '../_assets/icons/search.svg';
 import '../App.css';
 
 function RepoSearchBar() {
  const [repoLink, setRepoLink] = useState('');

  // get repoLink from state
  const stateRepoLink = useSelector(state => state.repoLink);

  // get dispatch
  const dispatch = useDispatch();
  
  const handleFormChange =(e)=> {
    setRepoLink(e.target.value);
  }

  const handleSubmit =(e)=> {
    e.preventDefault();
    if (repoLink !== '') {
      dispatch(submitRepoLink(repoLink))
      //this.props.submitRepoLink(repoLink);
    } else {
      alert('Please paste a link to a GitHub repo.');
    }
  }
 
  return (
    <div className='repo-search-bar'>
      <img src = {icon} className='search-icon' alt='Search icon' />
      <form  
        onSubmit = {handleSubmit}>
      <input 
        type='text' 
        onChange={handleFormChange}
        value={repoLink}
        className='gitHubLink' 
        placeholder='Paste a link to a GitHub repo!'/>
        </form>
    </div>
  )

 }

// const mapStateToProps = state => ({
//   repoLink: state.repoLink,
// });
 export default RepoSearchBar;