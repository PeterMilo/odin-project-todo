import './style.css';
import '../node_modules/normalize.css';
import { createToDo, todoList, removeTodo } from './manage-todo';


//
const contentDiv = document.querySelector('#content');
const addTodoButton = document.getElementById('add-todo');
const removeTodoButton = document.getElementById('remove-todo');
console.log('Up and running!');
//
 



addTodoButton.addEventListener('click', () => {
  createToDo('Read Book', 'Read the new novel', '2023-06-15', 'Medium', 4);
  console.log(todoList)
});

removeTodoButton.addEventListener('click', () => {
  removeTodo();
});


