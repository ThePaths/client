
import { API_BASE_URL } from '../config';


export const GUEST_PATHS_REQUEST = 'PATHS_REQUEST';
export const guestPathsRequest = () => ({
  type: GUEST_PATHS_REQUEST
});

export const GUEST_PATHS_SUCCESS = 'PATHS_SUCCESS';
export const guestPathsSuccess = paths => ({
  type: GUEST_PATHS_SUCCESS,
  paths
});

export const GUEST_PATHS_ERROR = 'PATHS_ERROR';
export const guestPathsError = error => ({
  type: GUEST_PATHS_ERROR,
  error
});

// export const GUEST_CURRENT_PATH_REQUEST = 'GUEST_CURRENT_PATH_REQUEST';
// export const guestCurrentPathRequest = () => ({
//   type: GUEST_CURRENT_PATH_REQUEST
// });

export const GUEST_CURRENT_CLASSROOM_CHANGE = 'GUEST_CURRENT_CLASSROOM_CHANGE';
export const guestCurrentClassroomChange = (path) => ({
  type: GUEST_CURRENT_CLASSROOM_CHANGE,
  path
});

// export const GUEST_CURRENT_PATH_ERROR = 'GUEST_CURRENT_PATH_ERROR';
// export const guestCurrentPathError = error => ({
//   type: GUEST_CURRENT_PATH_ERROR,
//   error
// });

export const fetchGuestPaths = () => (dispatch, getState) => {
  dispatch(guestPathsRequest());
  fetch(`${API_BASE_URL}/api/paths/guest`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(paths => dispatch(guestPathsSuccess(paths)))
    .catch(error => dispatch(guestPathsError(error)));
};

export const changeGuestCurrentClassroom = (path) => (dispatch) => {
  dispatch(guestCurrentClassroomChange(path))
}