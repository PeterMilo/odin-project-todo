import {ToDo} from "./todo-object";

export const todoList = [];

export function createToDo (title, description, dueDate, priority) {
    const newID = Math.round( Math.random() * 1000 );

    const newToDo = new ToDo (title, description, dueDate, priority, newID);
    
    // console.log(newToDo);
    todoList.push(newToDo);
    return newToDo;

};

export function removeTodo() {
    if (todoList.length > 0) {
        const removedTodo = todoList.pop();
        console.log(`Removed the latest todo:`, removedTodo);
        console.log(todoList)
      } else {
        console.log(`No todos to remove.`);
      }    
}

export function findTodo(formId) {
  console.log('Finder function ready');
  console.log(formId);
  let foundForm;
  todoList.forEach((item) => {
    if(item.id == formId) {
      foundForm = item;
    };
  })
  return foundForm;
}

// Change due date
export function changeDueDate() {
  console.log('Waiting');
}

