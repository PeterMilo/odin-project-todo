import {ToDo} from "./todo-object";

export const todoList = [];

export function createToDo (title, description, dueDate, priority) {
    const newID = Math.round( Math.random() * 1000 );

    const newToDo = new ToDo (title, description, dueDate, priority, newID);
    
    // console.log(newToDo);
    todoList.push(newToDo);
    return newToDo;

};

