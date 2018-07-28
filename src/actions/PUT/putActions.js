import { API_BASE_URL } from '../config';

//PUT
export const UPDATE_USERS_CURRENT_PATHS_REQUEST = 'UPDATE_USERS__CURRENT_PATHS_REQUEST';
export const updateUsersCurrentPathsRequest = () => ({
  type: UPDATE_USERS_SAVED_PATHS_REQUEST
});

export const UPDATE_USERS__CURRENT_PATHS_SUCCESS = 'UPDATE_USERS__CURRENT_PATHS_SUCCESS';
export const updateUsersCurrentPathSSuccess = () => ({
  type: UPDATE_USERS__CURRENT_PATHS_SUCCESS
});

export const UPDATE_USERS_CURRENT_PATHS_ERROR = 'UPDATE_USERS_CURRENT_PATHS_ERROR';
export const updateUsersCurrentPathsError = error => ({
  type: UPDATE_USERS_CURRENT_PATHS_ERROR,
  error
});

//PUT
export const UPDATE_USERS_SAVED_PATHS_REQUEST = 'UPDATE_USERS_SAVED_PATHS_REQUEST';
export const updateUsersSavedPathsRequest = () => ({
  type: UPDATE_USERS_SAVED_PATHS_REQUEST
});

export const UPDATE_USERS_SAVED_PATHS_SUCCESS = 'UPDATE_USERS_SAVED_PATHS_SUCCESS';
export const updateUsersSavedPathSSuccess = () => ({
  type: UPDATE_USERS_SAVED_PATHS_SUCCESS
});

export const UPDATE_USERS_SAVED_PATHS_ERROR = 'UPDATE_USERS_SAVED_PATHS_ERROR';
export const updateUsersSavedPathsError = error => ({
  type: UPDATE_USERS_SAVED_PATHS_ERROR,
  error
});

//PUT
export const UPDATE_USER_COMPLETED_COURSE_REQUEST = 'UPDATE_USER_COMPLETED_COURSE_REQUEST';
export const upadateUserCompletedCourseRequest = () => ({
  type: UPDATE_USER_COMPLETED_COURSE_REQUEST,
});

export const UPDATE_USER_COMPLETED_COURSE_REQUEST_SUCCESS = 'UPDATE_USER_COMPLETED_COURSE_SUCCESS';
export const updateUserCompletedCourseSuccess = () => ({
  type: USER_COMPLETED_COURSE_REQUEST_SUCCESS,
});

export const UPDATE_USER_COMPLETED_COURSE_REQUEST_ERROR = 'UPDATE_USER_COMPLETED_COURSE_ERROR';
export const updateUserCompletedCoureError = error => ({
  type: UPDATE_USER_COMPLETED_COURSE_REQUEST_ERROR,
  error
});

//PUT
export const UPDATE_USER_LAST_VIDEO_INDEX_REQUEST = 'UPDATE_USER_LAST_VIDEO_INDEX_REQUEST';
export const updateUsersLastVideoIndexRequest = () => ({
  type: USER_LAST_VIDEO_INDEX_REQUEST,
});

export const UPDATE_USER_LAST_VIDEO_INDEX_SUCCESS = 'UPDATE_USER_LAST_VIDEO_INDEX_SUCCESS';
export const updateUsersLastVideoIndexSuccess = index => ({
  type: UPDATE_USER_LAST_VIDEO_INDEX_SUCCESS,
  index
});

export const UPDATE_USER_LAST_VIDEO_INDEX_ERROR = 'UPDATE_USER_LAST_VIDEO_INDEX_ERROR';
export const updateUsersLastVideoIndexError = error => ({
  type: UPDATE_USER_LAST_VIDEO_INDEX_ERROR,
  error
});

//PUT
export const UPDATE_USER_MARK_VIDEO_COMPLETED_REQUEST = 'UPDATE_USER_MARK_VIDEO_COMPLETED_REQUEST';
export const upadateUserMarkVideoCompletedRequest = () => ({
  type: UPDATE_USER_MARK_VIDEO_COMPLETED_REQUEST,
});

export const UPDATE_USER_MARK_VIDEO_COMPLETED_SUCCESS = 'UPDATE_USER_MARK_VIDEO_COMPLETED_SUCCESS';
export const upadateUserMarkVideoCompletedSuccess = () => ({
  type: UPDATE_USER_MARK_VIDEO_COMPLETED_SUCCESS,
});

export const UPDATE_USER_MARK_VIDEO_COMPLETED_ERROR = 'UPDATE_USER_MARK_VIDEO_COMPLETED_ERROR';
export const upadateUserMarkVideoCompletedError = error => ({
  type: UPDATE_USER_MARK_VIDEO_COMPLETED_ERROR,
  error
});

export const addToUserSaved = (pathId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(updateUsersSavedPathsRequest())
  fetch(`${API_BASE_URL}/api/userpaths/save`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    //------------------------next 2 lines do what??
    .then(() => dispatch(fetchSavedPaths()))
    .then(() => dispatch(fetchStatus(pathId)))
    .catch(err => dispatch(updateUsersSavedPathsRequest(err)));
};

export const addToUserCompleted = pathId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(upadateUserCompletedCourseRequest())
  fetch(`${API_BASE_URL}/api/userpaths/complete`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
  .then((response)=>dispatch(upadateUserCompletedCourseSuccess(response)))
  .catch(err => dispatch(upadateUserCompletedCourseError(err)));
};

export const addToUserCurrent = (pathId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(updateUsersCurrentPathsRequest())
  fetch(`${API_BASE_URL}/api/userpaths/start`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(res => dispatch(updateUsersCurrentPathsSuccess()))
    .catch(err => dispatch(updateUsersCurrentPathsError(err)));
};

export const userCompletedVideo = (pathId, videoIndex) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(userMarkVideoCompletedRequest());
  fetch(`${API_BASE_URL}/api/userpaths/completeVideo`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId, videoIndex })
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then((resp)=>{
      dispatch(upadateUserMarkVideoCompletedSuccess())
      if (!resp.includes(false)) {        
      //dispatch(removeFromUserCurrent(pathId))
      dispatch(addToUserCompleted(pathId))
     }
    })
    .catch(error => dispatch(upadateUserMarkVideoCompletedError(error)))
}

export const changeLastVideoIndex = (id, index) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(changeUsersLastVideoIndexRequest());
  fetch(`${API_BASE_URL}/api/userpaths/setVideoIndex`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId: id, videoIndex: index })
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(() => dispatch(changeUsersLastVideoIndexSuccess(index)))
    .catch(error => dispatch(changeUsersLastVideoIndexError(error)))
}