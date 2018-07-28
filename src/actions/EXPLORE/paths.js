import { API_BASE_URL } from '../../config';
import { authSuccess } from '../AUTH/authActions';

export const PATHS_REQUEST = 'PATHS_REQUEST';
export const pathsRequest = () => ({
  type: PATHS_REQUEST
});

export const PATHS_SUCCESS = 'PATHS_SUCCESS';
export const pathsSuccess = paths => ({
  type: PATHS_SUCCESS,
  paths
});

export const PATHS_ERROR = 'PATHS_ERROR';
export const pathsError = error => ({
  type: PATHS_ERROR,
  error
});

export const LESSON_SUCCESS = 'LESSON_SUCCESS';
export const lessonSuccess = lesson => ({
  type: LESSON_SUCCESS,
  lesson
});

export const fetchPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(pathsRequest());
  fetch(`${API_BASE_URL}/api/paths`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(paths => dispatch(pathsSuccess(paths)))
    .catch(error => dispatch(pathsError(error)));
};

export const addToCurrent = (pathId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/paths/start`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({pathId})
  })
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .then(data => dispatch(authSuccess(data)))
    .catch(err => console.log(err));
};
