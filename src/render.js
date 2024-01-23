import { todoList, findTodo } from "./manage-todo";

const contentDiv = document.querySelector('#content');

export function renderTodoList () {
    contentDiv.innerHTML = '';
    console.log('Render function active')

    todoList.forEach((todo) => {
        
        const todoContainer = document.createElement('div');
        const todoTitle = document.createElement('p');
        const todoDescription = document.createElement('p');
        const todoPriority = document.createElement('p');
        const todoDate = document.createElement('p');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        todoContainer.className = 'todo-item';
        todoContainer.id = todo.id;
        todoTitle.className = 'todo-tile';
        todoDescription.className = 'todo-description';
        todoPriority.className = 'todo-priority';
        todoDate.className = 'todo-date';
        editBtn.className = 'edit-btn';
        deleteBtn.className = 'delete-btn';

        todoTitle.textContent = `${todo.title}`;
        todoDescription.textContent = "Details: " + `${todo.description}`;
        todoPriority.textContent = "Priority: " + `${todo.priority}`;
        todoDate.textContent = "Due on " + `${todo.dueDate}`;
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";
        
      
        todoContainer.appendChild(todoTitle);
        todoContainer.appendChild(todoDescription);
        todoContainer.appendChild(todoPriority);
        todoContainer.appendChild(todoDate);
        todoContainer.appendChild(editBtn);
        todoContainer.appendChild(deleteBtn);

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