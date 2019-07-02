import { 
  SUBMIT_REPO_LINK,
  SET_FILTER,
  CLOSE_ISSUE_VIEWER,
} from '../actions';

const initialState = {
  repoLink: '',
  filterSelected: 'all',
  filterStyle: {
    all: 'issue-page-filter-selected',
    open: 'issue-page-filter-unselected',
    closed: 'issue-page-filter-unselected',
    pull: 'issue-page-filter-unselected',
  },
  issues: [
    { key: 1, title: "Issue viewer issue number one is right here!", body: "Hi there, I notice you have a problem with the code in this repo. Can you please fix it? Please? Please? I am going to include all the details in this issue and I hope it does not get displayed in full.", isPullRequest: false, labels: ["bug", "priority"]},
    { key: 2, title: "Issue 2", body: "This is actually a pull request", isPullRequest: true, labels: ["bug"]},
    { key: 3, title: "This issue title is so long that I wonder if it should be fully displayed in this issue viewer", body: "The deets", isPullRequest: false, labels: ["bug"]},
    { key: 4, title: "Issue 4", body: "Help me", isPullRequest: false, labels: ["bug"]},
    { key: 5, title: "Issue 5", body: "Another issue", isPullRequest: false, labels: ["bug"]},
    { key: 6, title: "Issue 6", body: "Hi there, I notice you have a problem with the code in this repo. Can you please fix it? Please?", isPullRequest: false, labels: ["bug"]},
    { key: 7, title: "Issue 7 🐛", body: "Bug 🐞🐞", isPullRequest: false, labels: ["bug"]},
  ]

}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_REPO_LINK: {
      // console.log('SUBMIT_REPO_LINK');
      return {
          ...state,
          repoLink: action.payload, 
      };
    }
    case SET_FILTER: {
      // console.log('SET_FILTER');
      return {
          ...state,
          filterSelected: action.payload,
      };
    }
    case CLOSE_ISSUE_VIEWER: {
      // console.log('CLOSE_ISSUE_VIEWER');
      return {
          ...state,
          repoLink: '', 
      };
    }
    default:
        //console.log(action);
      return state;   
  }
 
};

export default rootReducer;