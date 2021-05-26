import { ADD_TODO, SWITCH_THEME, IS_DONE, DELETE} from "../constants/action-types";

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function switchTheme(payload) {
  return { type: SWITCH_THEME, payload };
}

export function isDone(payload) {
  return { type: IS_DONE, payload };
}

export function deleteTodo(payload) {
  return { type: DELETE, payload };
}