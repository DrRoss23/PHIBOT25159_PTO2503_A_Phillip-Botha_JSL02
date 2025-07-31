// Prompt the user for a single task's data
function getTaskInput(taskNumber) {
  const title = prompt(`Enter the title for Task ${taskNumber}:`);
  const description = prompt(`Enter the description for Task ${taskNumber}:`);

  let status;
  while (true) {
    status = prompt(
      `Enter the status for Task ${taskNumber} (todo, doing, done):`
    );
    if (!status) continue;

    status = status.toLowerCase();

    if (status === "todo" || status === "doing" || status === "done") {
      break;
    } else {
      alert("Invalid status. Please enter only 'todo', 'doing', or 'done'.");
    }
  }

  return { title, description, status };
}

// Prompt user for two tasks
const task1 = getTaskInput(1);
const task2 = getTaskInput(2);

// Log tasks for testing
console.log("Task 1:", task1);
console.log("Task 2:", task2);

// Identify and log completed tasks
const completedTasks = [];
if (task1.status === "done") completedTasks.push(task1);
if (task2.status === "done") completedTasks.push(task2);

if (completedTasks.length > 0) {
  console.log("Completed tasks:");
  completedTasks.forEach((task) => {
    console.log(`Title: "${task.title}", Status: "${task.status}"`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
