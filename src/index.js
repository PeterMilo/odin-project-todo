import './style.css';
import '../node_modules/normalize.css';
import { createToDo, todoList, removeTodo, findTodo, saveEditTodo, addProject, projectList } from './manage-todo';
import { renderTodoList, renderEditFormContent, renderProjectList } from './render';

export let selectedProjectList = "None"


renderProjectList();
renderTodoList();

const contentDiv = document.querySelector('#content');

const addTodoButton = document.getElementById('add-todo');
const addProjectButton = document.getElementById('add-project');
const submitTodoButton = document.getElementById('submit-button');
const discardTodoButton = document.getElementById('task-discard-button');
const projectSubmitButton = document.getElementById('project-submit-button');
let projectItems = document.querySelectorAll('.project-element');



// Project form
const projectForm = document.getElementById('project-form');
const projectName = document.getElementById('project-name');


// Todo form and variables to help save input to Todo List Object. 
const todoForm = document.getElementById('task-form');
const todoTitle = document.getElementById('title');
const todoDescription = document.getElementById('description');
const todoPriority = document.getElementById('priorityInput'); 
const todoDate = document.getElementById('date');
const todoProject = document.getElementById('select-project');

// Editing form
const editingForm = document.getElementById('editing-form');
const editingOverlay = document.getElementById('overlay');
const editingCloseBtn = document.getElementById('edit-form-close-btn');

// Edit form variables
const editTitle = document.getElementById('edit-title');
const editDescription = document.getElementById('edit-description');
const editPriority = document.getElementById('edit-priority');
const editDate = document.getElementById('edit-date');
const editProject = document.getElementById('edit-project');





addTodoButton.addEventListener('click', () => {
  todoProject.innerHTML = "";
  projectList.forEach(project => {
    const option = document.createElement('option');
    option.value = project;
    option.text = project;
    todoProject.add(option);
  })
  editingOverlay.classList.toggle('active');
  todoForm.style.display = 'grid';
});

addProjectButton.addEventListener('click', () => {
  console.log('Make new projects')
  projectForm.style.display = 'grid';
  editingOverlay.classList.toggle('active');

});

//Project submit
projectSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  addProject(projectName.value);
  projectForm.reset();
  projectForm.style.display = 'none';
  editingOverlay.classList.toggle('active');

  renderProjectList();

  // Ensure project lists are updated and interactable
  projectItems = document.querySelectorAll('.project-element');
  projectItems.forEach(item => {
    item.addEventListener('click', handleProjectClick)
  })
})


// Submit button creates to-do object in todoList array and then activates function to display the to-dos
submitTodoButton.addEventListener('click', (event) => {
  event.preventDefault();
  createToDo(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value, todoProject.value);
  todoForm.reset();
  todoForm.style.display = 'none';
  editingOverlay.classList.toggle('active');
  console.log(todoList)
  renderTodoList();
} )

discardTodoButton.addEventListener ('click', (event) => {
  event.preventDefault();
  todoForm.reset();
  todoForm.style.display = 'none';
  editingOverlay.classList.toggle('active');
})


// Close editing form at store new values in todo object
editingCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const editId = editingForm.getAttribute('data-id')

  saveEditTodo(editTitle.value, editDescription.value, editPriority.value, editDate.value, editId);

  editingForm.classList.toggle('active');
  editingForm.style.display = 'none';
  editingOverlay.classList.toggle('active');
})




// Find the edit button belonging to the clicked to-do, then open edit form
contentDiv.addEventListener('click', (event) => {
  if(event.target.classList.contains('edit-btn')) {
    console.log('Edit registered');
    editingForm.classList.toggle('active');
    editingForm.style.display = 'grid';
    editingOverlay.classList.toggle('active');
    const formId = event.target.parentElement.parentElement.id;
    const formData = findTodo(formId);
    renderEditFormContent(formData);
  }
})


// Find the delete button belonging to the clicked to-do, then open edit form
contentDiv.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-btn')) {
    const formId = event.target.parentElement.parentElement.id;
    removeTodo(formId);
  }
})

projectItems.forEach(item => {
  item.addEventListener('click', handleProjectClick)
})

function handleProjectClick(event) {
  const clickedProject = event.target.textContent;
  selectedProjectList = clickedProject;
  console.log(selectedProjectList);
  renderTodoList();
}


