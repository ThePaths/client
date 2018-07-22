import { API_BASE_URL } from '../config';
import { authSuccess } from './auth';

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
export const LESSON_REQUEST = 'LESSON_REQUEST';
export const lessonRequest = () => ({
  type: LESSON_REQUEST
});

export const LESSON_SUCCESS = 'LESSON_SUCCESS';
export const lessonSuccess = lesson => ({
  type: LESSON_SUCCESS,
  lesson
})
export const LESSON_ERROR = 'LESSON_ERROR';
export const lessonError = error => ({
  type: LESSON_ERROR,
  error
});

export const fetchPaths = (authToken) => (dispatch ) => {
  //const authToken = getState().auth.authToken;
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

export const addToCurrent = (pathId, authToken) => (dispatch) => {
  //const authToken = getState().auth.authToken;
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
    return data
  })
  .then(data => dispatch(authSuccess(data)))
  .catch(err => console.log(err))
}

export const addToSaved = (pathId, authToken) => (dispatch) => {
  //const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/paths/save`, {
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
    return data
  })
  .then(data => dispatch(authSuccess(data)))
  .catch(err => console.log(err))
}

export const setDisplay = (pathId, authToken) => (dispatch) => {
  //const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/paths/display`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({pathId})
  })
  .then(res => res.json())
  // .then(data => {
  //   return data
  // })
  // .then(data => dispatch(authSuccess(data)))
  //  .then(() => dispatch(refreshAuthToken()))
  //  .then(() => window.location.href = '/classroom')
    .catch(err => console.log(err));
};

export const getLesson = (id,authToken) => (dispatch) => {
  //const authToken = getState().auth.authToken;
  dispatch(lessonRequest());
  fetch(`${API_BASE_URL}/api/paths/u/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
  })
  .then(res => res.json())
  .then(data => 
    {console.log(data);
      dispatch(lessonSuccess(data))})
  .catch(err => dispatch(lessonError(err)));
}