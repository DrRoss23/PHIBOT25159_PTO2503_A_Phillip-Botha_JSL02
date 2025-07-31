// Function to collect task info with status validation
function getTaskInput(taskNumber) {
  const title = prompt(`Enter the title for Task ${taskNumber}:`);
  const description = prompt(`Enter the description for Task ${taskNumber}:`);

  let status;
  while (true) {
    status = prompt(
      `Enter the status for Task ${taskNumber} (todo, doing, done):`
    );
    if (!status) continue; // if user presses cancel or enters nothing

    status = status.toLowerCase();

    if (status === "todo" || status === "doing" || status === "done") {
      break;
    } else {
      alert("Invalid status. Please enter only 'todo', 'doing', or 'done'.");
    }
  }

  return {
    title,
    description,
    status,
  };
}

// Get Task 1 and Task 2 inputs
const task1 = getTaskInput(1);
const task2 = getTaskInput(2);

// Temporary log to confirm input is stored
console.log("Task 1:", task1);
console.log("Task 2:", task2);

// Check which tasks are marked as "done" and add them to the completedTasks array
const completedTasks = [];

if (task1.status === "done") {
  completedTasks.push(task1);
}
if (task2.status === "done") {
  completedTasks.push(task2);
}

if (completedTasks.length > 0) {
  console.log("Completed tasks:");
  // Loop through completed tasks and log their title and status
  completedTasks.forEach((task) => {
    console.log(`Title: "${task.title}", Status: "${task.status}"`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
