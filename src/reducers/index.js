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
  issues: [
    // { key: 1, title: "Issue viewer issue number one is right here!", body: "Hi there, I notice you have a problem with the code in this repo. Can you please fix it? Please? Please? I am going to include all the details in this issue and I hope it does not get displayed in full.", isPullRequest: false, labels: ["bug", "priority"]},
    // { key: 2, title: "Issue 2", body: "This is actually a pull request", isPullRequest: true, labels: ["bug"]},
    // { key: 3, title: "This issue title is so long that I wonder if it should be fully displayed in this issue viewer", body: "The deets", isPullRequest: false, labels: ["bug"]},
    // { key: 4, title: "Issue 4", body: "Help me", isPullRequest: false, labels: ["bug"]},
    // { key: 5, title: "Issue 5", body: "", isPullRequest: false, labels: ["bug"]},
    // { key: 6, title: "Issue 6", body: "Hi there, I notice you have a problem with the code in this repo. Can you please fix it? Please?", isPullRequest: false, labels: ["bug"]},
    // { key: 7, title: "Issue 7 🐛", body: "Bug 🐞🐞", isPullRequest: false, labels: ["bug"]},
  ]

}
var gh = require('parse-github-url');
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_REPO_LINK: {
      console.log('SUBMIT_REPO_LINK');
      // gh(action.payload);
      console.log(action.payload);
      return {
          ...state,
          repoLink: action.payload, 
          user: gh(action.payload).owner,
          repoName: gh(action.payload).name,
      };
    }
    case SET_FILTER: {
      console.log('SET_FILTER');
      console.log(action.payload);
      return {
          ...state,
          filterSelected: action.payload,
      };
    }
    case CLOSE_ISSUE_VIEWER: {
      console.log('CLOSE_ISSUE_VIEWER');
      return {
          ...state,
          repoLink: '', 
          user: '',
          repoName: '',
          issues: [],
      };
    }
    case LOAD_ISSUES: {
      console.log('LOAD_ISSUES');
      console.log(action.payload);
      return {
          ...state,
          issues: action.payload,
      };
    }
  //   case FILTER_ISSUES: {
  //     console.log('FILTER_ISSUES');
  //     console.log(action.payload);
  //     switch (state.filterSelected) {
  //       case 'open':
  //           //filter open issues that are not pull request
  //     }
      
  //     return {
  //         ...state,
  //         filteredIssues: ,
  //     };
  //   }
    default:
        //console.log(action);
      return state;   
 }
 
};


export default rootReducer;