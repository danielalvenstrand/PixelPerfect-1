/*
* This part of the day will not go through:
* - Session storage (stateful application)
* - ES6
*/

// Init for variables
var todo = '';
var todos = document.getElementById('todo-list');
var todoField = document.getElementById('todo-field');
var submitButton = document.getElementById('submit-button');

// Adding event listeners
submitButton.addEventListener('click', addTodo)

// functions
function addTodo() {
  if(todoField.value.length < 1) throw new Error('Field can not be left empty');

  todo = todoField.value;
  createTodoItem(todo);
}

function createTodoItem(todo) {
  var todoItem = document.createElement('li');
  var todoItemContent = document.createElement('p');

  todoItemContent.innerText = todo;
  todoItem.addEventListener('click', function() {
    todoItem.classList.toggle('todo-done');
  });
  todoItem.appendChild(todoItemContent);

  var removeTodoButton = document.createElement('button');

  removeTodoButton.innerHTML = 'x';
  removeTodoButton.addEventListener('click', function() {
    todos.removeChild(todoItem);
  });
  todoItem.appendChild(removeTodoButton);

  todos.appendChild(todoItem);
}
