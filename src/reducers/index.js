import { 
  SUBMIT_REPO_LINK,
  SET_FILTER,
  CLOSE_ISSUE_VIEWER,
  LOAD_ISSUES,
  } from '../actions';

const initialState = {
  repoLink: '',
  user: '',
  repoName: '',
  filterSelected: 'all',
  issues: []

}
var gh = require('parse-github-url');
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_REPO_LINK: {
      return {
          ...state,
          repoLink: action.payload, 
          user: gh(action.payload).owner,
          repoName: gh(action.payload).name,
      };
    }
    case SET_FILTER: {
      return {
          ...state,
          filterSelected: action.payload,
      };
    }
    case CLOSE_ISSUE_VIEWER: {
      return {
          ...state,
          repoLink: '', 
          user: '',
          repoName: '',
          issues: [],
      };
    }
    case LOAD_ISSUES: {
      return {
          ...state,
          issues: action.payload,
      };
    }
 
    default:
      return state;   
 }
 
};


export default rootReducer;