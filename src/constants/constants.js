export const SUBMIT_REPO_LINK = 'SUBMIT_REPO_LINK';
export const SET_FILTER = 'SET_FILTER';
export const CLOSE_ISSUE_VIEWER = 'CLOSE_ISSUE_VIEWER';
export const LOAD_ISSUES = 'LOAD_ISSUES';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NO_DESCRIPTION_TEXT = 'No description provided.';
export const APP_NAME = 'GitHub Issues Viewer';
export const FILTERS = [{
    type: 'all',
    title: 'All Issues',
    isSelected: true,
},
{
    type: 'open',
    title: 'Open Issues',
    isSelected: false,
},
{
    type: 'closed',
    title: 'Closed Issues',
    isSelected: false,
},
{
    type: 'pulls',
    title: 'Pull Requests',
    isSelected: false,
},]