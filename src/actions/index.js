export const SUBMIT_REPO_LINK = 'SUBMIT_REPO_LINK'

export const submit = link => {
  return {
    type: SUBMIT_REPO_LINK,
    payload: link,
  };
};