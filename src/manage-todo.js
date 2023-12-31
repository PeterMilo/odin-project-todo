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

// Change due date
export function changeDueDate() {
  console.log('Waiting');
}

// Change priority
export function changePriority(priority, activeId) {
    ToDo.priority = priority;
}