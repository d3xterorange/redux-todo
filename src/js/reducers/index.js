import { ADD_TODO } from "../constants/action-types";

const initialState = {
  todos: [{
    text: 'intial todo',
  }]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return  {todos: state.todos.concat(action.payload)
  }
  }
  return state;
}

export default rootReducer;
