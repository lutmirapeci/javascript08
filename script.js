// to show the current date as a visual info for the user
document.getElementById("currentDate").textContent = new Date().toLocaleDateString();

// to save tasks from the webpage to localStorage
const saveTasks = () => {
  // we use the spread operator (...) to convert the NodeList (which is anot a real array) into an actual array
  // so that we can use array method .map() to iterate over the array of list items (<li> elements) and to transform
  //  each one into its corresponding task text
  const tasks = [...document.querySelectorAll("#taskList li")].map((taskItem) =>
    taskItem.textContent.replace("Remove", "").trim()
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// to load tasks from localStorage and display them on the webpage
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
    taskItem.textContent = task;

    const taskDate = task.split(" on ")[1];
    const today = new Date().toISOString().split("T")[0];

    if (taskDate === today) {
      taskItem.classList.add("highlight-current-date");
    }

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      taskList.removeChild(taskItem);
      saveTasks();
    };

    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);
  });
};

// adds new tasks to the task list, highlightes tasks scheduled for the current date, and saves tasks to localStorage
const addTask = () => {
  const description = document.getElementById("taskDescription").value;
  const time = document.getElementById("taskTime").value;
  const date = document.getElementById("taskDate").value;
  const today = new Date().toISOString().split("T")[0];

  if (!description || !time || !date) return alert("Please fill in all fields!");

  const taskItem = document.createElement("li");
  taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
  taskItem.textContent = `${description} at ${time} on ${date}`;

  if (date === today) taskItem.classList.add("highlight-current-date");

  const removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-danger btn-sm";
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => {
    taskItem.remove();
    saveTasks();
  };

  taskItem.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(taskItem);

  // we reset the input fields to empty strings after a task is added, so the user can enter new data for the next task
  document.getElementById("taskDescription").value = "";
  document.getElementById("taskTime").value = "";
  document.getElementById("taskDate").value = "";

  // we call the saveTasks function to save the updated list of tasks (including the new task) to localStorage
  saveTasks();
};

// also we call loadTasks at the end to populate the task list when the page loads or reloads
// when the script is run, the existing tasks are loaded from localStorage and displayed on the webpage
loadTasks();
