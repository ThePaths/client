//import { USER_PATHS_REQUEST, USER_PATHS_ERROR, CURRENT_PATHS_SUCCESS, SAVED_PATHS_SUCCESS, PATH_OVERVIEW_REQUEST, PATH_OVERVIEW_SUCCESS, USER_CLASSROOM_SUCCESS, GET_PATH_STATUS, USER_LAST_VIDEO_INDEX_REQUEST, USER_LAST_VIDEO_INDEX_SUCCESS, USER_LAST_VIDEO_INDEX_ERROR, USER_MARK_VIDEO_COMPLETED_ERROR } from "../actions/userPaths";
import {
  GET_USER_PATHS_REQUEST, GET_USER_PATHS_SUCCESS, GET_USER_PATHS_ERROR, GET_CURRENT_PATHS_REQUEST, GET_CURRENT_PATHS_SUCCESS,
  GET_CURRENT_PATHS_ERROR, GET_SAVED_PATHS_REQUEST, GET_SAVED_PATHS_SUCCESS, GET_SAVED_PATHS_ERROR, GET_COMPLETED_PATHS_REQUEST, 
  GET_COMPLETED_PATHS_SUCCESS, GET_COMPLETED_PATHS_ERROR, GET_PATH_OVERVIEW_REQUEST, GET_PATH_OVERVIEW_SUCCESS, GET_PATH_OVERVIEW_ERROR,
  GET_PATH_STATUS_REQUEST, GET_PATH_STATUS_SUCCESS, GET_PATH_STATUS_ERROR, UPDATE_USERS_CURRENT_PATHS_REQUEST,
  UPDATE_USERS_CURRENT_PATHS_SUCCESS, UPDATE_USERS_CURRENT_PATHS_ERROR, UPDATE_USERS_SAVED_PATHS_REQUEST, UPDATE_USERS_SAVED_PATHS_SUCCESS,
  UPDATE_USERS_SAVED_PATHS_ERROR, UPDATE_USER_LAST_VIDEO_INDEX_REQUEST, UPDATE_USER_LAST_VIDEO_INDEX_SUCCESS,
  UPDATE_USER_LAST_VIDEO_INDEX_ERROR, UPDATE_USER_MARK_VIDEO_COMPLETED_REQUEST, UPDATE_USER_MARK_VIDEO_COMPLETED_SUCCESS,
  UPDATE_USER_MARK_VIDEO_COMPLETED_ERROR, UPDATE_USER_COMPLETED_COURSE_REQUEST, UPDATE_USER_COMPLETED_COURSE_SUCCESS,
  UPDATE_USER_COMPLETED_COURSE_ERROR, DELETE_CURRENT_COURSE_REQUEST, DELETE_CURRENT_COURSE_SUCCESS,
  DELETE_CURRENT_COURSE_ERROR, DELETE_SAVED_COURSE_REQUEST, DELETE_SAVED_COURSE_SUCCESS, DELETE_SAVED_COURSE_ERROR} from "../actions/userPaths";


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
    case GET_USER_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }
      case GET_USER_PATHS_SUCCESS:
      return {
        ...state,
        loading: false
      }
      case GET_USER_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case GET_CURRENT_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case  GET_CURRENT_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        current: action.paths
      }
      case GET_CURRENT_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case GET_SAVED_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_SAVED_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        saved: action.paths
      }
      case GET_SAVED_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case GET_COMPLETED_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }
      case GET_COMPLETED_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        completed:action.comp
      }
      case GET_COMPLETED_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case GET_PATH_OVERVIEW_REQUEST:
      return {
        ...state,
        overviewLoading: true
      }
      case GET_PATH_OVERVIEW_SUCCESS:
      return {
        ...state,
        overview: action.overview,
        overviewLoading: false,
        error: null,
        lastVideoIndex:action.overview.lastVideoIndex,
        completedVideos:action.overview.completedVideos
      }
      case GET_PATH_OVERVIEW_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case GET_PATH_STATUS_REQUEST:
      return {
        ...state,
        loading: true
      }
      case GET_PATH_STATUS_SUCCESS:
      return {
        ...state,
        status: action.status,
        loading: false
      }
      case GET_PATH_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case UPDATE_USERS_CURRENT_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }
      case UPDATE_USERS_CURRENT_PATHS_SUCCESS:
      return {
        ...state,
        loading: false
      }
      case UPDATE_USERS_CURRENT_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case UPDATE_USERS_SAVED_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }
      case UPDATE_USERS_SAVED_PATHS_SUCCESS:
      return {
        ...state,
        loading: false
      }
      case UPDATE_USERS_SAVED_PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case UPDATE_USER_LAST_VIDEO_INDEX_REQUEST:
      return {
        ...state,
        loading: true
      }
      case UPDATE_USER_LAST_VIDEO_INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        lastVideoIndex:action.index
      }
      case UPDATE_USER_LAST_VIDEO_INDEX_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case UPDATE_USER_MARK_VIDEO_COMPLETED_REQUEST:
      return {
        ...state,
        loading: true
      }
      case UPDATE_USER_MARK_VIDEO_COMPLETED_SUCCESS:
      return {
        ...state,
        loading: false
      }
      case UPDATE_USER_MARK_VIDEO_COMPLETED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case UPDATE_USER_COMPLETED_COURSE_REQUEST:
      return {
        ...state,
        loading: true
      }
      case UPDATE_USER_COMPLETED_COURSE_SUCCESS:
      return {
        ...state,
        loading: false
      }
      case UPDATE_USER_COMPLETED_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case DELETE_CURRENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true
      }
      case DELETE_CURRENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false
      }
      case DELETE_CURRENT_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case DELETE_SAVED_COURSE_REQUEST:
      return {
        ...state,
        loading: true
      }
      case DELETE_SAVED_COURSE_SUCCESS:
      return {
        ...state,
        loading: false
      }
      case DELETE_SAVED_COURSE_ERROR:
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
//////////////////
    // case USER_PATHS_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error
    //   }

      // case PATH_OVERVIEW_SUCCESS:
      // return {
      //   ...state,
      //   overview: action.overview,
      //   overviewLoading: false,
      //   error: null,
      //   lastVideoIndex:action.overview.lastVideoIndex,
      //   completedVideos:action.overview.completedVideos
      // }

      // case PATH_OVERVIEW_REQUEST:
      // return {
      //   ...state,
      //   overviewLoading: true
      // }
     

      // case GET_PATH_STATUS:
      // return {
      //   ...state,
      //   status: action.status
      // }

      // case USER_LAST_VIDEO_INDEX_REQUEST:
      // return {
      //   ...state,
      //   loading: true
      // }

      // case USER_LAST_VIDEO_INDEX_SUCCESS:
      // return {
      //   ...state,
      //   loading: false,
      //   error: null,
      //   lastVideoIndex:action.index
      //}

    // case USER_LAST_VIDEO_INDEX_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error
    //   }

//     default:
//       return state
//   }
// }

//export default userPathsReducer

/*
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
        something:action.something
      }

    case USER_LAST_VIDEO_INDEX_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
*/