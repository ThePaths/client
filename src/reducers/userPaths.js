import { USER_PATHS_REQUEST, USER_PATHS_SUCCESS, USER_PATHS_ERROR } from "../actions/userPaths";

const initialState = {
  loading: true,
  userPaths: [],
  error: null
}

const userPathsReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case USER_PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userPaths: action.userPaths
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