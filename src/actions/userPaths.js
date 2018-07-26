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
  .then(status =>{
    console.log('status: ', status)
    dispatch(getPathStatus(status))})
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
    .then(() => dispatch(fetchSavedPaths()))
    .then(() => dispatch(fetchStatus(pathId)))
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
    body: JSON.stringify({pathId})
  })
    .then(res => res.json())
    .then(() => dispatch(fetchSavedPaths()))
    .then(() => dispatch(fetchStatus(pathId)))
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
    body: JSON.stringify({pathId})
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const completeVideo = (id, index) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/userpaths/completeVideo`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({id, index})
  })
  .then(res => res.json())
  .catch(error => dispatch(userPathsError(error)))
}

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
