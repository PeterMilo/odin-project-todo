import {ToDo} from "./todo-object";
import { renderTodoList } from "./render";

export const todoList = [];

export const projectList = ["None","Work", "Coding"];


const testTodoOne = new ToDo ('Test','Test written for development','12-04-2024','High',1, 'false', 'Coding')
todoList.push(testTodoOne);

const testTodoTwo = new ToDo ('More Test','Test written for the sake of writing something more longwinded and nonesensical','12-06-2024','Low',2, 'false', 'Coding')
todoList.push(testTodoTwo);


export function createToDo (title, description, dueDate, priority, project) {
    const newID = Math.round( Math.random() * 1000 );

    const newToDo = new ToDo (title, description, dueDate, priority, newID, false, project);
    
    todoList.push(newToDo);
    return newToDo;
};

export function addProject (project) {
  projectList.push(project);
  console.log(projectList);
}

export function removeTodo(id) {
    let todoToRemove = findTodo(id);
    todoList.pop(todoToRemove);
    renderTodoList();
}

export function findTodo(formId) {
  let foundForm;
  todoList.forEach((item) => {
    if(item.id == formId) {
      foundForm = item;
    };
  })
  return foundForm;
}

export function saveEditTodo (title, description, priority, dueDate, id) {
  console.log(`Edit id is ${id}`)
  todoList.forEach((item) => {
    if (item.id == id) {
      item.title = title;
      item.description = description;
      item.dueDate = dueDate;
      item.priority = priority;
    }
  })
  console.log(todoList);
  renderTodoList();
}



