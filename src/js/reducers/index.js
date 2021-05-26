import { ADD_TODO, SWITCH_THEME, IS_DONE, DELETE } from "../constants/action-types";

const initialState = {
  todos: [{
    id: 1,
    text: 'intial todo',
    isDone: false,
  }],
  isDarkTheme: false
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return  {...state, todos: state.todos.concat(action.payload)}
  } 
  
  if (action.type === SWITCH_THEME) {
    return  {...state, isDarkTheme: action.payload}
  }

  if (action.type === IS_DONE) {
    return {...state, todos: action.payload}
  }

if (action.type === DELETE) {
  return {...state, todos: action.payload}
}

return state;
}

export default rootReducer;