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

        todoContainer.className = 'todo-item'

        todoTitle.textContent = `${todo.title}`;
        todoDescription.textContent = "Details: " + `${todo.description}`;
        todoPriority.textContent = "Priority: " + `${todo.priority}`;
        todoDate.textContent = "Due on " + `${todo.dueDate}`;
        
      
        todoContainer.appendChild(todoTitle);
        todoContainer.appendChild(todoDescription);
        todoContainer.appendChild(todoPriority);
        todoContainer.appendChild(todoDate);

        contentDiv.appendChild(todoContainer);

    });
}
