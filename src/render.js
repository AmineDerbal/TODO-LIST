export const renderAllTasks = (task,number) => {
  const content = document.querySelector(".content");

  let todoTaskInfo = document.createElement("div");
  todoTaskInfo.className = "todo-task";
  content.appendChild(todoTaskInfo);


  let priority = document.createElement("div");

  priority.innerHTML= ` <table cellpadding="8" cellspacing="0">
  <tr>
    <td id="priority-1"></td>
    <td id="priority-2"></td>
    <td id="priority-3"></td>
  </tr>
</table> `;

priority.className = `priority priority-$(task.priority)`;

todoTaskInfo.appendChild(priority);

let taskTitle = document.createElement("span");
taskTitle.className = 'task-title';
taskTitle.textContent = task.title;

todoTaskInfo.appendChild(taskTitle);

let taskDate = document.createElement("span");
taskDate.className = 'task-date';
taskDate.textContent = task.dueDate;

todoTaskInfo.appendChild(taskDate);

let editButton = document.createElement("button");
editButton.className = 'button edit-button';
editButton.textContent = "Edit";

todoTaskInfo.appendChild(editButton);

 const taskInfoModal = document.createElement("div");
 taskInfoModal.className = "modal";
 taskInfoModal.id = "task-info-modal-"+number;

 todoTaskInfo.append(taskInfoModal);

 const taskInfoModalContent = document.createElement("div");
 taskInfoModalContent.className = "task-info-modal-content";
 taskInfoModalContent.id="task-info-modal-"+number;

 taskInfoModal.appendChild(taskInfoModalContent);



}