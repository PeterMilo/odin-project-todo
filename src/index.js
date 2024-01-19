import './style.css';
import '../node_modules/normalize.css';
import { createToDo, todoList, removeTodo } from './manage-todo';
import { renderTodoList, renderEditForm } from './render';


//
const contentDiv = document.querySelector('#content');

const addTodoButton = document.getElementById('add-todo');
const removeTodoButton = document.getElementById('remove-todo');
const submitTodoButton = document.getElementById('submit-button');

// Editing form
const editingForm = document.getElementById('editing-form');
const editingOverlay = document.getElementById('overlay');

const todoForm = document.getElementById('task-form');

// Todo form variables to help save input to Todo List Object. 
const todoTitle = document.getElementById('title');
const todoDescription = document.getElementById('description');
const todoPriority = document.getElementById('priorityInput'); 
const todoDate = document.getElementById('date');

console.log('Up and running!');
//
 



addTodoButton.addEventListener('click', () => {
  todoForm.style.display = 'block';
});

submitTodoButton.addEventListener('click', (event) => {
  event.preventDefault();
  createToDo(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value);
  todoForm.reset();
  todoForm.style.display = 'none';
  console.log(todoList)
  renderTodoList();
} )

removeTodoButton.addEventListener('click', () => {
  removeTodo();
});

contentDiv.addEventListener('click', (event) => {
  if(event.target.classList.contains('edit-btn')) {
    editingForm.classList.toggle('active');
    editingOverlay.classList.toggle('active');
    const formId = event.target.parentElement.id;
    renderEditForm(formId);
  }
})



