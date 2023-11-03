const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = path.join(__dirname, 'todoList.txt');

// Function to display the to-do list
function displayToDoList() {
  const todoList = fs.readFileSync(filePath, 'utf8');
  console.log("To-Do List:");
  console.log(todoList);
}

// Function to add a task to the to-do list
function addTaskToToDoList(task) {
  fs.appendFileSync(filePath, `${task}\n`);
  console.log(`Task "${task}" added to the to-do list.`);
}

// Function to clear the to-do list
function clearToDoList() {
  fs.writeFileSync(filePath, '');
  console.log("To-Do List cleared.");
}

// Main menu
function showMainMenu() {
  console.log("1. Display To-Do List");
  console.log("2. Add Task to To-Do List");
  console.log("3. Clear To-Do List");
  console.log("4. Exit");

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        displayToDoList();
        showMainMenu();
        break;
      case '2':
        rl.question('Enter task to add: ', (task) => {
          addTaskToToDoList(task);
          showMainMenu();
        });
        break;
      case '3':
        clearToDoList();
        showMainMenu();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        showMainMenu();
    }
  });
}

// Create the to-do list file if it doesn't exist
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '');
}

// Start the application
showMainMenu();
