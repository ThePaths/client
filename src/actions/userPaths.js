import { API_BASE_URL } from '../config';

export const USER_PATHS_REQUEST = 'USER_PATHS_REQUEST';
export const userPathsRequest = () => ({
  type: USER_PATHS_REQUEST
});

export const CURRENT_PATHS_SUCCESS = 'CURRENT_PATHS_SUCCESS';
export const currentPathsSuccess = currentPaths => ({
  type: CURRENT_PATHS_SUCCESS,
  currentPaths
});

export const SAVED_PATHS_SUCCESS = 'SAVED_PATHS_SUCCESS';
export const savedPathsSuccess = savedPaths => ({
  type: SAVED_PATHS_SUCCESS,
  savedPaths
});

export const USER_PATHS_ERROR = 'USER_PATHS_ERROR';
export const userPathsError = error => ({
  type: USER_PATHS_ERROR,
  error
});

export const fetchCurrentPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(userPathsRequest());
  fetch(`${API_BASE_URL}/api/dashboard/keeplearning`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(paths => {
      dispatch(currentPathsSuccess(paths))
    })
    .catch(error => dispatch(userPathsError(error)));
};

export const fetchSavedPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(userPathsRequest());
  fetch(`${API_BASE_URL}/api/dashboard/savedPaths`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(paths => {
      dispatch(savedPathsSuccess(paths))
    })
    .catch(error => dispatch(userPathsError(error)));
};

// export const addToUserSaved = (pathId) => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   fetch(`${API_BASE_URL}/api/userpaths/save`, {
//     method: 'PUT',
//     headers: {
//       // Provide our auth token as credentials
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${authToken}`
//     },
//     body: JSON.stringify({pathId})
//   })
//   .then(res => res.json())
//   .then(() => dispatch(fetchUserPaths()))
//   .catch(err => console.log(err))
// }

// export const setUserDisplay = pathId => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   fetch(`${API_BASE_URL}/api/userpaths/display`, {
//     method: 'PUT',
//     headers: {
//       // Provide our auth token as credentials
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${authToken}`
//     },
//     body: JSON.stringify({pathId})
//   })
//   .then(res => res.json())
//   .then(() => dispatch(fetchUserPaths()))
//   .catch(err => console.log(err))
// }
