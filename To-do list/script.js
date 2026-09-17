function add() {
  let input = document.getElementById('list');
  let todoContainer = document.getElementById('todo');

  // Check if input is not empty
  if (input.value.trim() === '') return;

  // Create task paragraph element
  let task = document.createElement('p');
  task.textContent = input.value + ' ';

  // Create delete button
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  // Attach click event to delete the task paragraph
  deleteButton.onclick = function () {
    task.remove();
  };

  // Append button to task, and task to main container
  task.appendChild(deleteButton);
  todoContainer.appendChild(task);

  // Clear input field after adding
  input.value = '';
}