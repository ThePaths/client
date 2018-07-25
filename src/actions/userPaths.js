import { API_BASE_URL } from '../config';

export const USER_PATHS_REQUEST = 'USER_PATHS_REQUEST';
export const userPathsRequest = () => ({
  type: USER_PATHS_REQUEST
});

export const USER_PATHS_SUCCESS = 'USER_PATHS_SUCCESS';
export const userPathsSuccess = userPaths => ({
  type: USER_PATHS_SUCCESS,
  userPaths
});

export const USER_PATHS_ERROR = 'USER_PATHS_ERROR';
export const userPathsError = error => ({
  type: USER_PATHS_ERROR,
  error
});

export const fetchUserPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(userPathsRequest());
  fetch(`${API_BASE_URL}/api/userpaths`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(paths => {
      dispatch(userPathsSuccess(paths));
    })
    .catch(error => dispatch(userPathsError(error)));
};

export const addToUserSaved = (pathId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/userpaths/save`, {
    method: 'PUT',
    headers: {
      // Provide our auth token as credentials
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({pathId})
  })
    .then(res => res.json())
    .then(() => dispatch(fetchUserPaths()))
    .catch(err => console.log(err));
};

export const setUserDisplay = pathId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/userpaths/display`, {
    method: 'PUT',
    headers: {
      // Provide our auth token as credentials
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({pathId})
  })
    .then(res => res.json())
    .then(() => dispatch(fetchUserPaths()))
    .catch(err => console.log(err));
};
