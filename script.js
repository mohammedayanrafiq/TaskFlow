let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  tasks.push(task);
  renderTasks();
  input.value = "";
}

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t) => {
    let li = document.createElement("li");
    li.textContent = t;
    list.appendChild(li);
  });
}
