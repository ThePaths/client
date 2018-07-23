import { PATHS_REQUEST, PATHS_SUCCESS, PATHS_ERROR, 
         LESSON_REQUEST, LESSON_SUCCESS, LESSON_ERROR } from "../actions/paths";

const initialState = {
  loading: false,
  paths: [],
  error: null,
  lesson: 'UB1O30fR-EE',
  replit: "https://repl.it/@ThePaths/JJSoEo8JSnc?lite=true"
};

const pathsReducer = ( state = initialState, action) => {
  switch(action.type) {
    case PATHS_REQUEST:
      return {
        ...state,
        loading: true
      }
      
     

    case PATHS_SUCCESS:
      return Object.assign({},state,{ 
        loading: false,
        error: null,
        paths: action.paths 
      }
      )

    case PATHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }


      case LESSON_REQUEST:
      return Object.assign({},state,{
        loading: true
      }
    )

    case LESSON_SUCCESS:
      return Object.assign({},state,{
        lesson: action.lesson.videos[0].videoId,
        replit: action.lesson.videos[0].replit,
        loading: false
      }
    )
    case LESSON_ERROR:
      return Object.assign({},state,{
        error: action.error,
        loading: false
      }
    )
        
    default:
      return state
  }
}

export default pathsReducer