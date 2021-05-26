import './styles.css';
import store from "./js/store/index";
import { addTodo, switchTheme, isDone, deleteTodo } from "./js/actions/index";

const todoList = document.querySelector('.list-group');
const themeBtn = document.getElementById('theme');
const todoForm = document.querySelector('.mainTodo');
const inputTask = document.querySelector('.form-control');

store.subscribe(render);

todoForm.addEventListener('submit', addItem)
window.addEventListener('load', render);
themeBtn.addEventListener('click', switchPageTheme);
todoList.addEventListener('click', doneItem);
todoList.addEventListener('click', deleteItem);


function render(e) {
  const newState = store.getState();
  todoList.innerHTML = '';
  newState.todos.forEach(({ id, text, isDone }) => {
    const todoItem = document.createElement('li');
    todoItem.innerText = `${id}. `+ text;
    todoItem.id = id;
    todoItem.classList.add('list-group-item');
    todoList.appendChild(todoItem);
    if (isDone === true) todoItem.classList.add('done');
  });
  if (newState.isDarkTheme) {document.body.classList.add('dark')} else {document.body.classList.remove('dark')}
};

function addItem(e){
  e.preventDefault();
  const currentId = store.getState().todos.length;
  store.dispatch(addTodo({id: currentId+1, text: inputTask.value, isDone: false}))
  inputTask.value = '';
}

function doneItem(e){
  if (!e.ctrlKey) {
let newTodos = store.getState().todos.map((todo) => {
  if(todo.id !== parseInt(e.target.id)) {
      return todo;
  }
 return Object.assign({}, todo, {isDone: !todo.isDone});
});
store.dispatch(isDone(newTodos))
}
}

function deleteItem(e) {
  if (e.ctrlKey) {
    console.log();
    let newTodos = store.getState().todos;
    let newId = 0;
    newTodos.splice(parseInt(e.target.id-1), 1);
    newTodos = newTodos.map((todo) => {
     newId++;
     return Object.assign({}, todo, {id: newId});
    });
    store.dispatch(deleteTodo(newTodos))
  }
}

function switchPageTheme() {
  store.dispatch(switchTheme(!store.getState().isDarkTheme))
}