import './styles.css';
import store from "./js/store/index";
import { addTodo } from "./js/actions/index";

const todoList = document.querySelector('.list-group');
const todoAddBtn = document.getElementById('add');
const themeBtn = document.getElementById('theme');
const todoForm = document.querySelector('.mainTodo');
const inputTask = document.querySelector('.form-control');

let todos = store.getState().todos

store.subscribe(render);

todoForm.addEventListener('submit', addItem)
window.addEventListener('load', render);

function render() {
  const newState = store.getState()

  todoList.innerHTML = '';

  newState.todos.forEach(({ text }) => {
    const todoItem = document.createElement('li');
    todoItem.innerText = text
    todoItem.classList.add('list-group-item');
    todoList.appendChild(todoItem);
  });
};

themeBtn.addEventListener('click',  ()=> {
  document.body.classList.toggle('dark');
})

function addItem(e){
  e.preventDefault();

  store.dispatch(addTodo({ text: inputTask.value }))
  inputTask.value = '';
}
