import { todoList } from "./manage-todo";

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

        todoContainer.className = 'todo-item';
        todoContainer.id = todo.id;
        todoTitle.className = 'todo-tile';
        todoDescription.className = 'todo-description';
        todoPriority.className = 'todo-priority';
        todoDate.className = 'todo-date';
        editBtn.className = 'edit-btn';

        todoTitle.textContent = `${todo.title}`;
        todoDescription.textContent = "Details: " + `${todo.description}`;
        todoPriority.textContent = "Priority: " + `${todo.priority}`;
        todoDate.textContent = "Due on " + `${todo.dueDate}`;
        editBtn.textContent = "Edit";
        
      
        todoContainer.appendChild(todoTitle);
        todoContainer.appendChild(todoDescription);
        todoContainer.appendChild(todoPriority);
        todoContainer.appendChild(todoDate);
        todoContainer.appendChild(editBtn);

        contentDiv.appendChild(todoContainer);

    });
}

export function renderEditForm (formId) {
    console.log(formId);
    console.log('Edit ready');
}