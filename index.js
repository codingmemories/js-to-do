const inputToDo = document.getElementById('addNewTask');
const tasksToDo = document.getElementById('taskList');

// Function add new task to the list
function addToDo () {
  const textToDo = inputToDo.value;
  if (textToDo !== '') {
    const li = document.createElement('li');
    li.textContent = textToDo;

    // Add event listener to list item to mark as done
    li.addEventListener('click', todoDone);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete❌';
    deleteButton.addEventListener('click', todoDelete);
    li.appendChild(deleteButton);
    
    tasksToDo.appendChild(li);
    inputToDo.value = '';
  }
}

// Function done To-Do
function todoDone (event) {
  const toDo = event.target;
  toDo.classList.toggle('done');
}

// Function delete To-Do
function todoDelete (event) {
  const toDo = event.target.parentElement;
  tasksToDo.removeChild(toDo);
}

// Add click event listener to add task button
document.querySelector('button').addEventListener('click', addToDo);

// Add keypress event listener to input field
inputToDo.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addToDo();
  }
});

