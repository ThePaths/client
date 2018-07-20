import { API_BASE_URL } from '../config';

export const PATHS_REQUEST = 'PATHS_REQUEST';
export const pathsRequest = () => ({
  type: PATHS_REQUEST
})

export const PATHS_SUCCESS = 'PATHS_SUCCESS';
export const pathsSuccess = paths => ({
  type: PATHS_SUCCESS,
  paths
})

export const PATHS_ERROR = 'PATHS_ERROR';
export const pathsError = error => ({
  type: PATHS_ERROR,
  error
})

export const fetchPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken
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
  .catch(error => dispatch(pathsError(error)))
}