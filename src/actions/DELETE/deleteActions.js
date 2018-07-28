import { API_BASE_URL } from '../../config';
import { fetchSavedPaths , fetchStatus } from '../GET/getActions'

//DELETE
export const DELETE_CURRENT_COURSE_REQUEST = 'DELETE_CURRENT_COURSE_REQUEST';
export const deleteCurrentCourseRequest = () => ({
  type: DELETE_CURRENT_COURSE_REQUEST,
});

export const DELETE_CURRENT_COURSE_SUCCESS = 'DELETE_CURRENT_COURSE_SUCCESS';
export const deleteCurrentCourseSuccess = () => ({
  type: DELETE_CURRENT_COURSE_SUCCESS,
});

export const DELETE_CURRENT_COURSE_ERROR = 'DELETE_CURRENT_COURSE_ERROR';
export const deleteCurrentCourseError = error => ({
  type: DELETE_CURRENT_COURSE_ERROR,
  error
});

//DELETE
export const DELETE_SAVED_COURSE_REQUEST = 'DELETE_SAVED_COURSE_REQUEST';
export const deleteSavedCourseRequest = () => ({
  type: DELETE_SAVED_COURSE_REQUEST,
});

export const DELETE_SAVED_COURSE_SUCCESS = 'DELETE_SAVED_COURSE_SUCCESS';
export const deleteSavedCourseSuccess = () => ({
  type: DELETE_SAVED_COURSE_SUCCESS,
});

export const DELETE_SAVED_COURSE_ERROR = 'DELETE_SAVED_COURSE_ERROR';
export const deleteSavedCourseError = error => ({
  type: DELETE_SAVED_COURSE_ERROR,
  error
});

//Delete
export const removeFromUserSaved = (pathId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteSavedCourseRequest())
  fetch(`${API_BASE_URL}/api/userpaths/unsave`, {
    method: 'PUT',
    headers: {
      // Provide our auth token as credentials
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(() => dispatch(fetchSavedPaths()))
    .then(() => dispatch(fetchStatus(pathId)))
    .catch(err => dispatch(deleteSavedCourseError(err)));
};

//Delete
export const removeCourseFromUserCurrent = pathId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteCurrentCourseRequest())
  fetch(`${API_BASE_URL}/api/userpaths/unstart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
    .then(res => {
      if (!res.ok) { return Promise.reject(res.statusText)}
        dispatch(deleteCurrentCourseSuccess())
      })
    .catch(err => dispatch(deleteCurrentCourseError(err)));
};