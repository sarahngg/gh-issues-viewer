export const SUBMIT_REPO_LINK = 'SUBMIT_REPO_LINK';
export const SET_FILTER = 'SET_FILTER';
export const CLOSE_ISSUE_VIEWER = 'CLOSE_ISSUE_VIEWER';
export const LOAD_ISSUES = 'LOAD_ISSUES';

export const submitRepoLink = link => {
  return {
    type: SUBMIT_REPO_LINK,
    payload: link,
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const closeIssueViewer = () => {
  return {
    type: CLOSE_ISSUE_VIEWER,
  };
};

export const loadIssues = issues => {
  return {
    type: LOAD_ISSUES,
    payload: issues,
  };
};
