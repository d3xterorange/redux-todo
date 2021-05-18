import './styles.css';
import store from "./js/store/index";
import { addTodo } from "./js/actions/index";

const todoList = document.querySelector('.list-group');
const todoAddBtn = document.getElementById('add');
const themeBtn = document.getElementById('theme');
const todoForm = document.querySelector('.mainTodo');
const inputTask = document.querySelector('.form-control');

let todos = Object.keys(store.getState().todos);
console.log(todos);

console.log(store.dispatch(addTodo({ todos: 'aaa'}))); 

store.subscribe(() => render());

window.todo = todos;

todoAddBtn.addEventListener('click', addItem)
todoForm.addEventListener('submit', addItem)
window.addEventListener('load', render);

function render() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const todoItem = document.createElement('li');
    todoItem.innerText = todo.toString();
    todoItem.classList.add('list-group-item');
    todoList.appendChild(todoItem);
  });
};

themeBtn.addEventListener('click',  ()=> {
  document.body.classList.toggle('dark');
})

function addItem(e){
  store.dispatch( addTodo({ todos: 'aaa', id: 1}) )
    // todos.push(inputTask.value);
    // inputTask.value = '';
    e.preventDefault();
}
