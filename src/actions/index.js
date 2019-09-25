import { 
  SUBMIT_REPO_LINK,
  SET_FILTER,
  CLOSE_ISSUE_VIEWER,
  LOAD_ISSUES,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  } from '../constants/constants';

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

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const previousPage = () => {
  return {
    type: PREVIOUS_PAGE,
  };
};

