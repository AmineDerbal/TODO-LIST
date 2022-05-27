export const renderAllTasks = (task, number) => {
  const content = document.querySelector(".content");

  let todoTaskButton = document.createElement("div");
  todoTaskButton.className = "todo-task-button";
  content.appendChild(todoTaskButton);

  let todoTaskInfo = document.createElement("div");
  todoTaskInfo.className = "todo-task";
  todoTaskButton.appendChild(todoTaskInfo);

  let priority = document.createElement("div");

  priority.innerHTML = ` <table cellpadding="8" cellspacing="0">
  <tr>
    <td id="priority-1"></td>
    <td id="priority-2"></td>
    <td id="priority-3"></td>
  </tr>
</table> `;

  priority.className = `priority priority-$(task.priority)`;

  todoTaskInfo.appendChild(priority);

  let taskTitle = document.createElement("span");
  taskTitle.className = "task-title";
  taskTitle.textContent = task.title;

  todoTaskInfo.appendChild(taskTitle);

  let taskDate = document.createElement("span");
  taskDate.className = "task-date";
  taskDate.textContent = task.dueDate;

  todoTaskInfo.appendChild(taskDate);

  let editButton = document.createElement("button");
  editButton.className = "button edit-button";
  editButton.textContent = "Edit";

  todoTaskInfo.appendChild(editButton);

  let taskPanel = document.createElement("div");
  taskPanel.className = "panel";
  taskPanel.textContent = task.description;

  todoTaskButton.appendChild(taskPanel);

  todoTaskButton.addEventListener("click", (e) => {
    if (e.target.className !== "button edit-button") {
      todoTaskButton.classList.toggle("active");
      console.log(todoTaskButton.className);
      let panel = todoTaskButton.children[1];
      console.log(panel.className);

      if (panel.style.display == "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }
  });

  editButton.addEventListener("click", () => {
    console.log("good");
  });
};
