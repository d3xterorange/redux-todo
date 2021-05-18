import './styles.css'

const todos = ['one', 'two', 'three'];

const todoList = document.querySelector('.list-group');
const todoAddBtn = document.getElementById('add');
const themeBtn = document.getElementById('theme');
const todoForm = document.querySelector('.mainTodo');
const inputTask = document.querySelector('.form-control');


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
    todos.push(inputTask.value);
    inputTask.value = '';
    render();
    e.preventDefault();
}