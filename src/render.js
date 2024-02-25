import { todoList, projectList } from "./manage-todo";
import { selectedProjectList } from "./index";

const contentDiv = document.querySelector('#content');
const sidebarDiv = document.querySelector('#side-bar-content');


export function renderProjectList () {
    sidebarDiv.innerHTML = '';
    projectList.forEach((project) => {
        const projectDiv = document.createElement('div');

        projectDiv.className = 'project-element';

        projectDiv.textContent = project;

        sidebarDiv.appendChild(projectDiv);
    })
}

export function renderTodoList () {
    contentDiv.innerHTML = '';
    console.log('Render function active')
    let filteredTodoList = [];

    if (selectedProjectList !== 'None') {
        filteredTodoList = todoList.filter(todo => todo.project === selectedProjectList)
    } else {
        filteredTodoList = todoList;
    }

    filteredTodoList.forEach((todo) => {
        
        const todoContainer = document.createElement('div');
        const todoTitle = document.createElement('p');
        // const todoDescription = document.createElement('p');
        const todoPriority = document.createElement('p');
        const todoDate = document.createElement('p');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const rightDiv = document.createElement('div');
        const leftDiv = document.createElement('div');


        todoContainer.className = 'todo-item';
        todoContainer.id = todo.id;
        todoTitle.className = 'todo-tile';
        // todoDescription.className = 'todo-description';
        todoPriority.className = 'todo-priority';
        todoDate.className = 'todo-date';
        editBtn.className = 'edit-btn';
        deleteBtn.className = 'delete-btn';
        rightDiv.className = 'todo-right-div';
        leftDiv.className = 'todo-left-div';

        todoTitle.textContent = `${todo.title}`;
        // todoDescription.textContent = "Details: " + `${todo.description}`;
        todoPriority.textContent = "Priority: " + `${todo.priority}`;
        todoDate.textContent = "Due on " + `${todo.dueDate}`;
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";
        
      
        leftDiv.appendChild(todoTitle);
        // todoContainer.appendChild(todoDescription);
        leftDiv.appendChild(todoPriority);
        leftDiv.appendChild(todoDate);
        rightDiv.appendChild(editBtn);
        rightDiv.appendChild(deleteBtn);

        todoContainer.appendChild(leftDiv);
        todoContainer.appendChild(rightDiv);


        contentDiv.appendChild(todoContainer);

    });
}

export function renderEditFormContent(form) {
    // Data from clicked form
    let todoTitle = form.title;
    let todoDescription = form.description;
    let todoPriority = form.priority;
    let todoDue = form.dueDate;
    let todoId = form.id;

    console.log(todoId);

    // Select form elements
    let editingForm = document.getElementById('editing-form');
    let formTitle = document.querySelector('#edit-title');
    let formDescription = document.querySelector('#edit-description');
    let formPriority = document.querySelector('#edit-priority');
    let formDue = document.querySelector('#edit-date');

    // Set form element values to that of the clicked form
    formTitle.value = todoTitle;
    formDescription.value = todoDescription;
    formPriority.value = todoPriority;
    formDue.value = todoDue;
    editingForm.setAttribute('data-id', todoId);
}