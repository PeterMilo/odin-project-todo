import './style.css';
import '../node_modules/normalize.css';
import printMe from './print';


const contentDiv = document.querySelector('#content');

console.log('Up and running!');


// function component() {
//     const btn = document.createElement('button');
  
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
 
//     contentDiv.appendChild(btn);
// }
 
// document.body.appendChild(component());


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
 
    element.appendChild(btn);
 
    return element;
  }
 
document.body.appendChild(component());