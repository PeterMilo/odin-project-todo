import './style.css';
import '../node_modules/normalize.css';
import { createToDo, todoList, removeTodo } from './manage-todo';


//
const contentDiv = document.querySelector('#content');
const addTodoButton = document.getElementById('add-todo');
const removeTodoButton = document.getElementById('remove-todo');

const todoForm = document.getElementById('task-form');
const todoTitle = document.getElementById('title');
const todoDescription = document.getElementById('description');
const todoPriority = document.getElementById('priorityInput'); 
const todoDate = document.getElementById('date');
const submitTodoButton = document.getElementById('submit-button');

console.log('Up and running!');
//
 



addTodoButton.addEventListener('click', () => {
  todoForm.style.display = 'block';
});

submitTodoButton.addEventListener('click', (event) => {
  event.preventDefault();
  createToDo(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value);
  console.log(todoList)
} )

removeTodoButton.addEventListener('click', () => {
  removeTodo();
});


