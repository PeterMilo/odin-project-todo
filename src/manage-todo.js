import {ToDo} from "./todo-object";
import { renderTodoList } from "./render";

export const todoList = [];
export const projectList = [];

export function createToDo (title, description, dueDate, priority) {
    const newID = Math.round( Math.random() * 1000 );

    const newToDo = new ToDo (title, description, dueDate, priority, newID, false);
    
    // console.log(newToDo);
    todoList.push(newToDo);
    return newToDo;

};

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



