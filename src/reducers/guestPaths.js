import {
  GUEST_PATHS_REQUEST,
  GUEST_PATHS_SUCCESS,
  GUEST_PATHS_ERROR,
  GUEST_CLASSROOM_REQUEST,
  GUEST_CLASSROOM_SUCCESS,
  GUEST_CLASSROOM_ERROR
} from "../actions/GUEST/guestPaths";

const initialState = {
  loading: true,
  paths: [],
  error: null,
  classroom: null
};

const guestPathsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUEST_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GUEST_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        paths: action.paths
      };

    case GUEST_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case GUEST_CLASSROOM_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GUEST_CLASSROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        classroom: action.classroom
      };
    case GUEST_CLASSROOM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default guestPathsReducer;
