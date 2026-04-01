export function saveData(data) {
  localStorage.setItem("tasks", JSON.stringify(data));
}
