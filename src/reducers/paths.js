import { PATHS_REQUEST, PATHS_SUCCESS, PATHS_ERROR, LESSON_SUCCESS } from "../actions/paths";

const initialState = {
  loading: false,
  paths: [],
  error: null,
  lesson: null
};

const pathsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case PATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        paths: action.paths
      }

    case PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case LESSON_SUCCESS:
      return {
        ...state,
        lesson: action.lesson
      }

    default:
      return state
  }
}

export default pathsReducer