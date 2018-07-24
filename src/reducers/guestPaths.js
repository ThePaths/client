import { GUEST_PATHS_REQUEST, GUEST_PATHS_SUCCESS, GUEST_PATHS_ERROR , GUEST_CLASSROOM_SUCCESS} from "../actions/guestPaths";

const initialState = {
  loading: true,
  paths: [],
  error: null,
  classroom: null
};

const guestPathsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case GUEST_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GUEST_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        paths: action.paths
      }

    case GUEST_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
     
    case GUEST_CLASSROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        classroom: action.classroom
      }

    default:
      return state
  }
}

export default guestPathsReducer