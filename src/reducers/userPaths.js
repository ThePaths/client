import { USER_PATHS_REQUEST, USER_PATHS_ERROR, CURRENT_PATHS_SUCCESS, SAVED_PATHS_SUCCESS, PATH_OVERVIEW_REQUEST, PATH_OVERVIEW_SUCCESS, USER_CLASSROOM_SUCCESS, GET_PATH_STATUS, USER_LAST_VIDEO_INDEX_REQUEST, USER_LAST_VIDEO_INDEX_SUCCESS, USER_LAST_VIDEO_INDEX_ERROR } from "../actions/userPaths";

const initialState = {
  loading: true,
  overviewLoading: true,
  current: [],
  saved: [],
  completed: [],
  overview: null,
  status: null,
  error: null,
  lastVideoIndex:0,
  completedVideos:[],
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
        error: null,
        lastVideoIndex:action.overview.lastVideoIndex,
        completedVideos:action.overview.completedVideos
      }

      case PATH_OVERVIEW_REQUEST:
      return {
        ...state,
        overviewLoading: true
      }
      case USER_CLASSROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        current: action.classroom
      }

      case GET_PATH_STATUS:
      return {
        ...state,
        status: action.status
      }

      case USER_LAST_VIDEO_INDEX_REQUEST:
      return {
        ...state,
        loading: true
      }

      case USER_LAST_VIDEO_INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        lastVideoIndex:action.index
      }

    case USER_LAST_VIDEO_INDEX_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}

export default userPathsReducer