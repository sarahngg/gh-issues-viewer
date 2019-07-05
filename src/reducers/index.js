import { 
  SUBMIT_REPO_LINK,
  SET_FILTER,
  CLOSE_ISSUE_VIEWER,
  LOAD_ISSUES,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  } from '../actions';

const initialState = {
  repoLink: 'dfdf',
  user: 'dustxd',
  repoName: 'million-dollar-project',
  filterSelected: 'all',
  issues: [],
  page: 1,
}
var gh = require('parse-github-url');
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case NEXT_PAGE: {
      const newPage = state.page + 1; 
      return {
          ...state,
          page: newPage,
      };
    }
    case PREVIOUS_PAGE: {
      let newPage = state.page;
      if (state.page > 1) {
        newPage = state.page - 1;
      } 
      return {
          ...state,
          page: newPage,
      };
    }
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
          page: 1,
      };
    }
    case CLOSE_ISSUE_VIEWER: {
      return {
          ...state,
          repoLink: '', 
          user: '',
          repoName: '',
          page: 1,
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