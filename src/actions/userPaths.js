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

export const PATH_OVERVIEW_REQUEST = 'PATH_OVERVIEW_REQUEST';
export const pathOverviewRequest = () => ({
  type: PATH_OVERVIEW_REQUEST
});

export const PATH_OVERVIEW_SUCCESS = 'PATH_OVERVIEW_SUCCESS';
export const fetchPathOverviewSuccess = overview => ({
  type: PATH_OVERVIEW_SUCCESS,
  overview
});

export const GET_PATH_STATUS = 'GET_PATH_STATUS';
export const getPathStatus = status => ({
  type: GET_PATH_STATUS,
  status
});

export const USER_CLASSROOM_SUCCESS = 'USER_CLASSROOM_SUCCESS';
export const userClassroomSuccess = classroom => ({
  type: USER_CLASSROOM_SUCCESS,
  classroom
});

export const USER_LAST_VIDEO_INDEX_REQUEST = 'USER_LAST_VIDEO_INDEX_REQUEST';
export const changeUsersLastVideoIndexRequest = () => ({
  type: USER_LAST_VIDEO_INDEX_REQUEST,
});


export const USER_LAST_VIDEO_INDEX_SUCCESS = 'USER_LAST_VIDEO_INDEX_SUCCESS';
export const changeUsersLastVideoIndexSuccess = index => ({
  type: USER_LAST_VIDEO_INDEX_SUCCESS,
  index
});

export const USER_LAST_VIDEO_INDEX_ERROR = 'USER_LAST_VIDEO_INDEX_ERROR';
export const changeUsersLastVideoIndexError = error => ({
  type: USER_LAST_VIDEO_INDEX_ERROR,
  error
});

export const USER_MARK_VIDEO_COMPLETED_REQUEST = 'USER_MARK_VIDEO_COMPLETED_REQUEST';
export const userMarkVideoCompletedRequest = () => ({
  type: USER_MARK_VIDEO_COMPLETED_REQUEST,
});


export const USER_MARK_VIDEO_COMPLETED_SUCCESS = 'USER_MARK_VIDEO_COMPLETED_SUCCESS';
export const userMarkVideoCompletedSuccess = () => ({
  type: USER_MARK_VIDEO_COMPLETED_SUCCESS,
  
});

export const USER_MARK_VIDEO_COMPLETED_ERROR = 'USER_MARK_VIDEO_COMPLETED_ERROR';
export const userMarkVideoCompletedError = error => ({
  type: USER_MARK_VIDEO_COMPLETED_ERROR,
  error
});

export const USER_COMPLETED_COURSE_REQUEST = 'USER_COMPLETED_COURSE_REQUEST_REQUEST';
export const userCompletedCourseRequest = () => ({
  type: USER_COMPLETED_COURSE_REQUEST,
});


export const USER_COMPLETED_COURSE_REQUEST_SUCCESS = 'USER_COMPLETED_COURSE_REQUEST_SUCCESS';
export const userCompletedCourseSuccess = () => ({
  type: USER_COMPLETED_COURSE_REQUEST_SUCCESS,
  
});

export const USER_COMPLETED_COURSE_REQUEST_ERROR = 'USER_COMPLETED_COURSE_REQUEST_ERROR';
export const userCompletedCoureError = error => ({
  type: USER_COMPLETED_COURSE_REQUEST_ERROR,
  error
});


export const fetchStatus = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/userpaths/status/${id}`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(status => {
      console.log('status: ', status)
      dispatch(getPathStatus(status))
    })
    .catch(err => dispatch(userPathsError(err)))
}

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
      dispatch(currentPathsSuccess(paths));
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
      console.log(paths)
      dispatch(savedPathsSuccess(paths));
    })
    .catch(error => dispatch(userPathsError(error)));
};

// path overview action
export const fetchPathOverview = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(pathOverviewRequest());
  fetch(`${API_BASE_URL}/api/overview/${id}`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(overview => {
      dispatch(fetchPathOverviewSuccess(overview)); //change to new action
    })
    .then(res => {
      console.log(res, 'fetch overview action');
      dispatch(fetchStatus(id))
    })
    .catch(error => dispatch(userPathsError(error)));
};

export const fetchUserClassroom = id => dispatch => {
  dispatch(userPathsRequest());
  fetch(`${API_BASE_URL}/api/paths/${id}`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(classroom => dispatch(userClassroomSuccess(classroom)))
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
    body: JSON.stringify({ pathId })
  })
    .then(res => res.json())
    .then(() => dispatch(fetchSavedPaths()))
    .then(() => dispatch(fetchStatus(pathId)))
    .catch(err => console.log(err));
};

export const addToUserCompleted = pathId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(userCompletedCourseRequest())
  fetch(`${API_BASE_URL}/api/userpaths/complete`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
  .then(res => res.json())
  .then((response)=>dispatch(userCompletedCourseSuccess(response)))
  .catch(err => console.log(err));
};

export const addToUserCurrent = (pathId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/userpaths/start`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const removeFromUserSaved = (pathId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/userpaths/unsave`, {
    method: 'PUT',
    headers: {
      // Provide our auth token as credentials
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
    .then(res => res.json())
    .then(() => dispatch(fetchSavedPaths()))
    .then(() => dispatch(fetchStatus(pathId)))
    .catch(err => console.log(err));
};

export const removeFromUserCurrent = pathId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/userpaths/unstart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ pathId })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};


// export const completeVideo = (pathId, videoIndex) => (dispatch, getState) => {
//   const authToken = getState().auth.authToken;
//   dispatch(userMarkVideoCompletedRequest());
//   fetch(`${API_BASE_URL}/api/userpaths/completeVideo`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${authToken}`
//     },
//     body: JSON.stringify({ pathId, videoIndex })
//   })
//     .then(() => dispatch(userMarkVideoCompletedSuccess()))
//     .catch(error => dispatch(userPathsError(error)))
// }
export const completeVideo = (pathId, videoIndex) => (dispatch, getState) => {
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
    .then((response) => {
      return response.json()
     })
    .then((resp)=>{
      console.log(resp)
   
        if (!resp.includes(false)) {
      alert('Completed');
      dispatch(removeFromUserCurrent(pathId))
      dispatch(addToUserCompleted(pathId))
      console.log('completed')
    }
    })
    .catch(error => dispatch(userPathsError(error)))
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
    .then(() => dispatch(changeUsersLastVideoIndexSuccess(index)))
    .catch(error => dispatch(changeUsersLastVideoIndexError(error)))
}



