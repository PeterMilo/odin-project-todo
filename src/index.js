import './style.css';
import '../node_modules/normalize.css';
import { createToDo, todoList } from './manage-todo';


//
const contentDiv = document.querySelector('#content');
const addTodoButton = document.getElementById('add-todo');
const removeTodoButton = document.getElementById('remove-todo');
console.log('Up and running!');
//


function removeTodoByID(id) {
  const indexToRemove = todoList.findIndex(todo => todo.id === id);
  if (indexToRemove !== -1) {
    todoList.splice(indexToRemove, 1);
    console.log(`Todo with ID ${id} removed.`);
  } else {
    console.log(`Todo with ID ${id} not found.`);
  }
};




addTodoButton.addEventListener('click', () => {
  createToDo('Read Book', 'Read the new novel', '2023-06-15', 'Medium', 4);
  console.log(todoList)
});

removeTodoButton.addEventListener('click', () => {
  console.log('remove')
});


