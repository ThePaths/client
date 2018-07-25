import { USER_PATHS_REQUEST, USER_PATHS_ERROR, CURRENT_PATHS_SUCCESS, SAVED_PATHS_SUCCESS } from "../actions/userPaths";

const initialState = {
  loading: true,
  current: [],
  saved: [],
  completed: [],
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

    default:
      return state
  }
}

export default userPathsReducer