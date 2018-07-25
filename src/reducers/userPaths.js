import { USER_PATHS_REQUEST, USER_PATHS_ERROR, CURRENT_PATHS_SUCCESS, SAVED_PATHS_SUCCESS, PATH_OVERVIEW_REQUEST, PATH_OVERVIEW_SUCCESS } from "../actions/userPaths";

const initialState = {
  loading: true,
  overviewLoading: true,
  current: [],
  saved: [],
  completed: [],
  overview: null,
  error: null
}

const userPathsReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case CURRENT_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        current: action.currentPaths
      }

    case SAVED_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        saved: action.savedPaths
      }

    case USER_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case PATH_OVERVIEW_SUCCESS:
      return {
        ...state,
        overview: action.overview,
        overviewLoading: false,
        error: null
      }

      case PATH_OVERVIEW_REQUEST:
      return {
        ...state,
        overviewLoading: true
      }

    default:
      return state
  }
}

export default userPathsReducer