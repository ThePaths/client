import { API_BASE_URL } from '../../config';//GET'ing && PUT'ing


//GET
export const GET_USER_PATHS_REQUEST = 'GET_USER_PATHS_REQUEST';
export const getUserPathsRequest = () => ({
  type: GET_USER_PATHS_REQUEST
});

export const GET_USER_PATHS_SUCCESS = 'GET_USER_PATHS_SUCCESS';
export const getUserPathsSuccess = () => ({
  type: GET_USER_PATHS_SUCCESS
});

export const GET_USER_PATHS_ERROR = 'GET_USER_PATHS_ERROR';
export const getUserPathsError = error => ({
  type: GET_USER_PATHS_ERROR,
  error
});

//GET
export const GET_CURRENT_PATHS_REQUEST = 'GET_CURRENT_PATHS_REQUEST';
export const getCurrentPathsRequest = () => ({
  type: GET_CURRENT_PATHS_REQUEST
});

export const GET_CURRENT_PATHS_SUCCESS = 'GET_CURRENT_PATHS_SUCCESS';
export const getCurrentPathsSuccess = paths => ({
  type: GET_CURRENT_PATHS_SUCCESS,
  paths
});

export const GET_CURRENT_PATHS_ERROR = 'GET_CURRENT_PATHS_ERROR';
export const getCurrentPathsError = error => ({
  type: GET_CURRENT_PATHS_ERROR,
  error
});

//GET
export const GET_SAVED_PATHS_REQUEST = 'GET_SAVED_PATHS_REQUEST';
export const getSavedPathsRequest = () => ({
  type: GET_USER_PATHS_REQUEST
});

export const GET_SAVED_PATHS_SUCCESS = 'GET_SAVED_PATHS_SUCCESS';
export const getSavedPathsSuccess = (paths) => ({
  type: GET_SAVED_PATHS_SUCCESS,
  paths
});

export const GET_SAVED_PATHS_ERROR = 'GET_SAVED_PATHS_ERROR';
export const getSavedPathsError = error => ({
  type: GET_SAVED_PATHS_ERROR,
  error
});

//GET
export const GET_COMPLETED_PATHS_REQUEST = 'GET_COMPLETED_PATHS_REQUEST';
export const getCompletedPathsRequest = () => ({
  type: GET_COMPLETED_PATHS_REQUEST
});

export const GET_COMPLETED_PATHS_SUCCESS = 'GET_COMPLETED_PATHS_SUCCESS';
export const getCompletedPathsSuccess = (paths) => ({
  type: GET_COMPLETED_PATHS_SUCCESS,
  paths
});

export const GET_COMPLETED_PATHS_ERROR = 'GET_COMPLETED_PATHS_ERROR';
export const getCompletedPathsError = error => ({
  type: GET_COMPLETED_PATHS_ERROR,
  error
});


//GET
export const GET_PATH_OVERVIEW_REQUEST = 'GET_PATH_OVERVIEW_REQUEST';
export const getPathOverviewRequest = () => ({
  type: GET_PATH_OVERVIEW_REQUEST
});

export const GET_PATH_OVERVIEW_SUCCESS = 'GET_PATH_OVERVIEW_SUCCESS';
export const getPathOverviewSuccess = overview => ({
  type: GET_PATH_OVERVIEW_SUCCESS,
  overview
});

export const GET_PATH_OVERVIEW_ERROR = 'GET_PATH_OVERVIEW_ERROR';
export const getPathOverviewError = error => ({
  type: GET_PATH_OVERVIEW_ERROR,
  error
});

//GET
export const GET_PATH_STATUS_REQUEST = 'GET_PATH_STATUS_REQUEST';
export const getPathStatusRequest = () => ({
  type: GET_PATH_STATUS_REQUEST,
  
});
export const GET_PATH_STATUS_SUCCESS = 'GET_PATH_STATUS_SUCCESS';
export const getPathStatusSuccess = status => ({
  type: GET_PATH_STATUS_SUCCESS,
  status
});
export const GET_PATH_STATUS_ERROR = 'GET_PATH_STATUS_ERROR';
export const getPathStatusError = error => ({
  type: GET_PATH_STATUS_ERROR,
  error
});

export const fetchStatus = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getPathStatusRequest())
  fetch(`${API_BASE_URL}/api/userpaths/status/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(status => dispatch(getPathStatusSuccess(status)))
    .catch(err => dispatch(getPathStatusError(err)))
}

export const fetchCurrentPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getCurrentPathsRequest());
  fetch(`${API_BASE_URL}/api/dashboard/keeplearning`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(paths => dispatch(getCurrentPathsSuccess(paths)))
    .catch(error => dispatch(getCurrentPathsError(error)));
};

export const fetchSavedPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getSavedPathsRequest());
  fetch(`${API_BASE_URL}/api/dashboard/savedPaths`, {
    method: 'GET',
    headers: {     
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(paths =>dispatch(getSavedPathsSuccess(paths)))
    .catch(error => dispatch(getSavedPathsError(error)));
};

export const fetchCompletedPaths = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getCompletedPathsRequest());
  fetch(`${API_BASE_URL}/api/dashboard/completedPaths`, {
    method: 'GET',
    headers: {     
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(paths =>dispatch(getCompletedPathsSuccess(paths)))
    .catch(error => dispatch(getCompletedPathsError(error)));
};

export const fetchPathOverview = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getPathOverviewRequest());
  fetch(`${API_BASE_URL}/api/overview/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(overview => dispatch(getPathOverviewSuccess(overview)))
    .then(res => dispatch(fetchStatus(id)))
    .catch(error => dispatch(getPathOverviewError(error)));
};



///------MISSING GET COMPLETED PATHS