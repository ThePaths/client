import { GUEST_PATHS_REQUEST, GUEST_PATHS_SUCCESS, GUEST_PATHS_ERROR , GUEST_CURRENT_CLASSROOM_CHANGE} from "../actions/guestPaths";

const initialState = {
  loading: false,
  paths: [],
  error: null,
  currentPath:null
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
      case GUEST_CURRENT_CLASSROOM_CHANGE:
      return {
        ...state,
        loading: false,
        currentPath: action.path
      }

    default:
      return state
  }
}

export default guestPathsReducer