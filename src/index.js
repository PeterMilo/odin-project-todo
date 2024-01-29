import './style.css';
import '../node_modules/normalize.css';
import { createToDo, todoList, removeTodo, findTodo, saveEditTodo } from './manage-todo';
import { renderTodoList, renderEditFormContent } from './render';



const contentDiv = document.querySelector('#content');

const addTodoButton = document.getElementById('add-todo');
const removeTodoButton = document.getElementById('remove-todo');
const submitTodoButton = document.getElementById('submit-button');

// Editing form
const editingForm = document.getElementById('editing-form');
const editingOverlay = document.getElementById('overlay');
const editingCloseBtn = document.getElementById('edit-form-close-btn');

const todoForm = document.getElementById('task-form');

// Todo form variables to help save input to Todo List Object. 
const todoTitle = document.getElementById('title');
const todoDescription = document.getElementById('description');
const todoPriority = document.getElementById('priorityInput'); 
const todoDate = document.getElementById('date');


// Edit form variables
const editTitle = document.getElementById('edit-title');
const editDescription = document.getElementById('edit-description');
const editPriority = document.getElementById('edit-priority');
const editDate = document.getElementById('edit-date');





addTodoButton.addEventListener('click', () => {
  todoForm.style.display = 'block';
});


// Submit button creates to-do object in todoList array and then activates function to display the to-dos
submitTodoButton.addEventListener('click', (event) => {
  event.preventDefault();
  createToDo(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value);
  todoForm.reset();
  todoForm.style.display = 'none';
  console.log(todoList)
  renderTodoList();
} )


// Close editing form at store new values in todo object
editingCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const editId = editingForm.getAttribute('data-id')

  saveEditTodo(editTitle.value, editDescription.value, editPriority.value, editDate.value, editId);

  editingForm.classList.toggle('active');
  editingOverlay.classList.toggle('active');
})




// Find the edit button belonging to the clicked to-do, then open edit form
contentDiv.addEventListener('click', (event) => {
  if(event.target.classList.contains('edit-btn')) {
    editingForm.classList.toggle('active');
    editingOverlay.classList.toggle('active');
    const formId = event.target.parentElement.id;
    const formData = findTodo(formId);
    renderEditFormContent(formData);
  }
})


// Find the delete button belonging to the clicked to-do, then open edit form
contentDiv.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-btn')) {
    const formId = event.target.parentElement.id;
    removeTodo(formId);
  }
})

