const form = document.querySelector("form");
const toDoList = document.querySelector("#TaskList");

form.onsubmit = (event) => {
  event.preventDefault();

  function handleCompleteTask() {
    newTask.classList.toggle("complete");
  }
  function handleDeleteTask() {
    newTask.remove();
    deleteButton.remove();
  }

  const tsInput = document.getElementById("tsInput");
  const tsOutput = tsInput.value;
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "elimina";
  newTask.innerText = tsOutput;
  toDoList.appendChild(newTask);
  toDoList.appendChild(deleteButton);
  form.reset();

  newTask.addEventListener("click", handleCompleteTask);
  deleteButton.addEventListener("click", handleDeleteTask);
};
