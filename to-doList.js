//java script 
document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.flex = "1";
  span.style.cursor = "pointer";
  span.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("task-list").appendChild(li);

  input.value = ""; // clear input
}
