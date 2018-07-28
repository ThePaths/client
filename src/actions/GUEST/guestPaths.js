
import { API_BASE_URL } from '../../config';


export const GUEST_PATHS_REQUEST = 'GUEST_PATHS_REQUEST';
export const guestPathsRequest = () => ({
  type: GUEST_PATHS_REQUEST
});

export const GUEST_PATHS_SUCCESS = 'GUEST_PATHS_SUCCESS';
export const guestPathsSuccess = paths => ({
  type: GUEST_PATHS_SUCCESS,
  paths
});

export const GUEST_PATHS_ERROR = 'GUEST_PATHS_ERROR';
export const guestPathsError = error => ({
  type: GUEST_PATHS_ERROR,
  error
});

export const GUEST_CLASSROOM_REQUEST = 'GUEST_CLASSROOM_REQUEST';
export const guestClassroomRequest = () => ({
  type: GUEST_CLASSROOM_REQUEST  
})

export const GUEST_CLASSROOM_SUCCESS = 'GUEST_CLASSROOM_SUCCESS';
export const guestClassroomSuccess = classroom => ({
  type: GUEST_CLASSROOM_SUCCESS,
  classroom
})

export const GUEST_CLASSROOM_ERROR = 'GUEST_CLASSROOM_ERROR';
export const guestClassroomError = error => ({
  type: GUEST_CLASSROOM_ERROR,
  error
})

export const fetchGuestPaths = () => dispatch => {
  dispatch(guestPathsRequest());
  fetch(`${API_BASE_URL}/api/paths/guest`, {
    method: 'GET',
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(paths => dispatch(guestPathsSuccess(paths)))
    .catch(error => dispatch(guestPathsError(error)));
};

export const fetchGuestClassroom = id => dispatch => {
  dispatch(guestClassroomRequest());
  fetch(`${API_BASE_URL}/api/paths/${id}`, {
    method: 'GET',
  })
  .then(res => {
    if (!res.ok) { return Promise.reject(res.statusText)}
    return res.json();
    })
    .then(classroom => dispatch(guestClassroomSuccess(classroom)))
    .catch(error => dispatch(guestClassroomError(error)));
}
//import { API_BASE_URL } from '../config';


// export const GUEST_PATHS_REQUEST = 'GUEST_PATHS_REQUEST';
// export const guestPathsRequest = () => ({
//   type: GUEST_PATHS_REQUEST
// });

// export const GUEST_PATHS_SUCCESS = 'GUEST_PATHS_SUCCESS';
// export const guestPathsSuccess = paths => ({
//   type: GUEST_PATHS_SUCCESS,
//   paths
// });

// export const GUEST_PATHS_ERROR = 'GUEST_PATHS_ERROR';
// export const guestPathsError = error => ({
//   type: GUEST_PATHS_ERROR,
//   error
// });

// export const GUEST_CLASSROOM_SUCCESS = 'GUEST_CLASSROOM_SUCCESS';
// export const guestClassroomSuccess = classroom => ({
//   type: GUEST_CLASSROOM_SUCCESS,
//   classroom
// })

// export const fetchGuestPaths = () => dispatch => {
//   dispatch(guestPathsRequest());
//   fetch(`${API_BASE_URL}/api/paths/guest`, {
//     method: 'GET',
//   })
//     .then(res => res.json())
//     .then(paths => dispatch(guestPathsSuccess(paths)))
//     .catch(error => dispatch(guestPathsError(error)));
// };

// export const fetchGuestClassroom = id => dispatch => {
//   dispatch(guestClassroomRequest());
//   fetch(`${API_BASE_URL}/api/paths/${id}`, {
//     method: 'GET',
//   })
//     .then(res => res.json())
//     .then(classroom => dispatch(guestClassroomSuccess(classroom)))
//     .catch(error => dispatch(guestClassroomError(error)));
// }