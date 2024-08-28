const form = document.querySelector("form");
const toDoList = document.querySelector("#TaskList");

form.onsubmit = (event) => {
  event.preventDefault();

  const tsInput = document.getElementById("tsInput");
  const tsOutput = tsInput.value;
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "elimina"; //deleteButton.innerText = "🗑️"; con " win + . " troviamo le emoji
  newTask.innerText = tsOutput;
  newTask.appendChild(deleteButton);
  toDoList.appendChild(newTask);
  form.reset();

  newTask.addEventListener("click", handleCompleteTask);
  deleteButton.addEventListener("click", handleDeleteTask);
};

function handleCompleteTask(event) {
  event.currentTarget.classList.toggle("complete");
}
function handleDeleteTask(event) {
  //qui anche se questa funzione verrà chiamata dal deletButton con il parentNode riesco ad eliminare tutto l'elemento li (task e bottone)
  event.currentTarget.parentNode.remove();
}
