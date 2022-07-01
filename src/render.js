import { displayAllTasks,checkSelectedProject } from "./task";
export const renderAllTasks = (tasksList,projectName) => {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  if(projectName === undefined){
    
    for (let taskPosition = 0; taskPosition < tasksList.length; taskPosition++) {
      content.appendChild(renderProjectTask(tasksList,taskPosition));
     }
     return;
  }
  for (let taskPosition = 0; taskPosition < tasksList.length; taskPosition++) {
    if(tasksList[taskPosition].project == projectName){
      content.appendChild(renderProjectTask(tasksList,taskPosition));
    }
   }

  
};
export const renderProjectTask = (tasksList, taskPosition)=>{
  let taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

   let todoTaskButton = document.createElement("div");
    todoTaskButton.className = "todo-task-button";
    taskContainer.appendChild(todoTaskButton);

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

 priority.className = "priority priority-"+tasksList[taskPosition].priority;
 todoTaskInfo.appendChild(priority);

 generateTaskByCompletedStatus(todoTaskInfo,tasksList,taskPosition);
    let groupButton = document.createElement("div");
    groupButton.className = "group-button";
    todoTaskInfo.appendChild(groupButton);

    todoTaskButton.addEventListener("click", (e) => {
      groupButton.classList.toggle("active");
      let panel = todoTaskButton.children[1];

      togglePanel(panel);
    });

    let optionButton = document.createElement("button");
    optionButton.className = "option-button";
    optionButton.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
    groupButton.appendChild(optionButton);

    let checkCompletedTaskButton = document.createElement("button");
    checkCompletedTaskButton.className = "check-button";
    checkCompletedTaskButton.innerHTML = checkTaskCompletedStatus(tasksList[taskPosition]);
    groupButton.appendChild(checkCompletedTaskButton);
    
    checkCompletedTaskButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if(tasksList[taskPosition].completed == true){
        tasksList[taskPosition].completed = false;

      }else{
        tasksList[taskPosition].completed = true
      }
      checkCompletedTaskButton.innerHTML = checkTaskCompletedStatus(tasksList[taskPosition]);
      generateNewStatusChangedTask(todoTaskInfo,tasksList[taskPosition]);
     localStorage.setItem("tasks", JSON.stringify(tasksList));

    })

    let dropDown = document.createElement("div");
    dropDown.className = "dropdown-content";
    taskContainer.appendChild(dropDown);

    optionButton.addEventListener("click", (e) => {
      e.stopPropagation();

      dropDown.style.display =
        dropDown.style.display === "block" ? "none" : "block";
    });

    let editButton = document.createElement("button");
    editButton.className = "button dropdown-edit";
    editButton.innerHTML = '<i class="bi bi-pencil"></i> Edit';

    let removeButton = document.createElement("button");
    removeButton.className = "button dropdown-remove";
    removeButton.innerHTML = '<i class="bi bi-trash"></i> Remove';

    dropDown.appendChild(editButton);
    dropDown.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
      removeTask(tasksList, taskPosition);
    });

    editButton.addEventListener("click", (e) => {
     e.stopPropagation();
      editTask(tasksList, taskPosition);
    });

    let taskPanel = document.createElement("div");
    taskPanel.className = "panel";
    taskPanel.textContent = tasksList[taskPosition].description;

    todoTaskButton.appendChild(taskPanel);

    return taskContainer;


}

const togglePanel = (panel) => {
  if (panel.style.display == "block") {
    setTimeout(() => {
      panel.style.display = "none";
    }, 150);
  } else {
    setTimeout(() => {
      panel.style.display = "block";
    }, 150);
  }
};

const removeTask = (tasksList, taskPosition) => {
  tasksList.splice(taskPosition, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksList));
  const projectName = checkSelectedProject();
  if(projectName === undefined){
    displayAllTasks();
  }else{

    displayAllTasks(projectName);
  }
};

const editTask = (tasks, taskPosition) => {
  const modal = document.createElement("div");
  modal.className = "modal modal-edit-task";
  document.body.appendChild(modal);

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);

  const h1 = document.createElement("h1");
  h1.textContent = "Update The Task";
  modalContent.appendChild(h1);

  const taskName = document.createElement("input");
  taskName.type = "text";
  taskName.placeholder = "Task Name";
  taskName.value = tasks[taskPosition].title;
  taskName.maxLength = '15';
  modalContent.appendChild(taskName);

  const taskError = document.createElement("div");
  taskError.className = "error task-error";
  modalContent.appendChild(taskError);

  const taskDescription = document.createElement("textarea");
  taskDescription.className = "task-desc";
  taskDescription.name = "taskDesc";
  taskDescription.cols = "20";
  taskDescription.rows = "10";
  taskDescription.value = tasks[taskPosition].description;  
  modalContent.appendChild(taskDescription);

  const modalDate = document.createElement("div");
  modalDate.className = "modal-date";
  modalContent.appendChild(modalDate);

  const apptLabel = document.createElement("label");
  apptLabel.for = "appt";
  apptLabel.textContent = "Choose a due date for the task:";
  const date = document.createElement("input");
  date.type = "date";
  date.name = "appt";
  date.value = tasks[taskPosition].dueDate;
  modalDate.appendChild(apptLabel);
  modalDate.appendChild(date);

  const dateError = document.createElement("div");
  dateError.className = "error date-error";
  modalContent.appendChild(dateError);

  const modalPriority = document.createElement("div");
  modalPriority.className = "modal-priority";
  modalContent.appendChild(modalPriority);

  const priorityLabel = document.createElement("label");
  priorityLabel.for = "priority";
  priorityLabel.textContent = "Choose a priority:";
  modalPriority.appendChild(priorityLabel);

  const priority = document.createElement("select");
  priority.name = "priority";
  modalPriority.appendChild(priority);
  
  const optionHigh = document.createElement("option");
  optionHigh.value = "3";
  optionHigh.textContent = "High";
  priority.appendChild(optionHigh);
  
  const optionMedium = document.createElement("option");
  optionMedium.value = "2";
  optionMedium.textContent = "Medium";
  priority.appendChild(optionMedium);
  
  const optionLow = document.createElement("option");
  optionLow.value = "1";
  optionLow.textContent = "Low";
  priority.appendChild(optionLow);
  priority.value = tasks[taskPosition].priority;
  
  const modalProject = document.createElement("div");
  modalProject.className = "modal-project";
  modalContent.appendChild(modalProject);

  const projectLabel = document.createElement("label");
  projectLabel.textContent = "Choose a project:";
  projectLabel.for = "project";
  modalProject.appendChild(projectLabel);

  const project = document.createElement("select");
  project.name="project";
  const projectsList = JSON.parse(localStorage.getItem("projectsList"));

  for (let i = 0; i < projectsList.length; i++) {
  let option = document.createElement("option");
    option.value = i;
    option.innerHTML = projectsList[i];
    project.appendChild(option);
  }
  project.value=tasks[taskPosition].project;
  modalProject.appendChild(project);

  const modalButton = document.createElement("div");
  modalButton.className = "modal-button";
  modalContent.appendChild(modalButton);

  const updateTaskButton = document.createElement("button");
  updateTaskButton.className = "button";
  updateTaskButton.id = "updateTask";
  updateTaskButton.textContent = "Update Task";
  modalButton.appendChild(updateTaskButton);

  updateTaskButton.addEventListener("click", ()=>{
    if(taskName.value === "") taskError.textContent="Please input a title for the task";
    if(date.value === "") dateError.textContent="Please input a date for the task";

    if((taskName.value === "")||(date.value === "")) return;

    tasks[taskPosition].title = taskName.value;
    tasks[taskPosition].description = taskDescription.value;
    tasks[taskPosition].dueDate = date.value;
    tasks[taskPosition].priority = priority.value;
    tasks[taskPosition].project = project.value;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayAllTasks();
    document.body.removeChild(modal);
  })

  const cancelForm = document.createElement("button");
  cancelForm.className = "button";
  cancelForm.id = "cancelUpdateform";
  cancelForm.textContent = "Cancel";
modalButton.appendChild(cancelForm);

cancelForm.addEventListener("click", () =>{
  document.body.removeChild(modal);
})

};

export const displayProject = () => {
  const project = document.querySelector(".project");
  const projects = document.getElementById("project");
  let projectsList = JSON.parse(localStorage.getItem("projectsList"));
  project.innerHTML = "";
  projects.innerHTML = "";

  if (projectsList.length == 0) {
    return;
  }

  for (let projectPosition = 0; projectPosition < projectsList.length; projectPosition++) {
    const list = document.createElement("ul");
    list.setAttribute("data-project", projectPosition);
    list.className = "project-list"
    list.id = "project" + projectPosition;
    project.appendChild(list);
    list.addEventListener("click",(e) =>{
      displayProjectToggle(e);
      displayAllTasks(projectPosition);
      
      
      
    });

    const sideNav = document.createElement("button");
    sideNav.className = "side-nav";
    sideNav.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
    list.appendChild(sideNav);

    const dropDown = document.createElement("ul");
    dropDown.className = "dropdown-project";
    sideNav.appendChild(dropDown);

    const projectEdit = document.createElement("li");
    const projectDelete = document.createElement("li");

    dropDown.appendChild(projectEdit);
    dropDown.appendChild(projectDelete);

    const projectEditButton = document.createElement("button");
    projectEditButton.className = "button project-button";
    projectEditButton.textContent = "Edit";
    projectEdit.appendChild(projectEditButton);

    projectEditButton.addEventListener("click", (e) => {
      e.stopPropagation();
      hideAllDropDownElements();
      editProject(projectsList[projectPosition], projectPosition);
    });

    const projectDeleteButton = document.createElement("button");
    projectDeleteButton.className = "button project-button";
    projectDeleteButton.textContent = "Delete";
    projectEdit.appendChild(projectDeleteButton);

    sideNav.addEventListener("click", (e) => {
      e.stopPropagation();

      dropDown.style.display =
        dropDown.style.display === "block" ? "none" : "block";
    });

    projectDeleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(projectPosition);
    });

    const Name = document.createElement("span");
    Name.textContent = projectsList[projectPosition];
    list.appendChild(Name);

    let option = document.createElement("option");
    option.value = projectPosition;
    option.innerHTML = projectsList[projectPosition];
    projects.appendChild(option);
  }

};

const deleteProject = (projectListPosition) => {
  let projectsList = JSON.parse(localStorage.getItem("projectsList"));
  deleteAllTasksOfProject(projectListPosition); 
  projectsList.splice(projectListPosition, 1);
  localStorage.setItem("projectsList", JSON.stringify(projectsList));
  displayProject();

  if (!localStorage.getItem("tasks")) {
    return;
  }

  displayAllTasks();
};

const editProject = (name,number) => {

  const editProjectModal = document.createElement("div");
  editProjectModal.className = "modal edit-project-modal";
  document.body.appendChild(editProjectModal);

  const projectModalContent = document.createElement("div");
  projectModalContent.className = "project-modal-content";
  editProjectModal.appendChild(projectModalContent);

  const editProjectNameInput = document.createElement("input");
  editProjectNameInput.id = "editProjectName";
  editProjectNameInput.type = "text";
  editProjectNameInput.placeholder = name;
  projectModalContent.appendChild(editProjectNameInput);

  const projectNameError = document.createElement("div");
  projectNameError.className = "error project-name-error";
  projectModalContent.appendChild(projectNameError);

  const projectNameSubmitButton = document.createElement("button");
  projectNameSubmitButton.id = "ProjectSubmitButton";
  projectNameSubmitButton.classList.add("button");
  projectNameSubmitButton.textContent = "Submit";
  projectModalContent.appendChild(projectNameSubmitButton);

  projectNameSubmitButton.addEventListener("click", () => {
    
    if (editProjectNameInput.value == "") {
      projectNameError.textContent = "please input project name";
      return;
    }

   if (editProjectNameInput.value == name) {
      projectNameError.textContent = "this is already your project name";
      return;
    }
    
    let projectsList = JSON.parse(localStorage.getItem("projectsList"));
    for(let projectPosition = 0; projectPosition < projectsList.length; projectPosition++){
      if (editProjectNameInput.value == projectsList[projectPosition]){
          projectNameError.textContent = "this project already exists";
          return;
      }
    }

    projectNameError.textContent = "";
    
    projectsList[number] = editProjectNameInput.value;
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    let tasksList = JSON.parse(localStorage.getItem("tasks"));
    renderAllTasks(tasksList);
    const projectName = checkSelectedProject();
  if(projectName === undefined){
    displayAllTasks();
  }else{

    displayAllTasks(projectName);
  }

    editProjectModal.parentElement.removeChild(editProjectModal);
    displayProject();
  });
};

const deleteAllTasksOfProject = (projectListPosition) => {
  let tasksList = JSON.parse(localStorage.getItem("tasks"));
 
  for (let i = 0; i < tasksList.length; i++) {
    if (tasksList[i].project == projectListPosition) {
      tasksList.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasksList));
      deleteAllTasksOfProject(projectListPosition);
      return;
    }
  }
};

export const hideAllDropDownElements = () => {
  const tasksDropDown = document.querySelectorAll(".dropdown-content");
  const projectsDropDown = document.querySelectorAll(".dropdown-project");

  tasksDropDown.forEach(function (task) {
    if (task.style.display == "block") {
      task.style.display = "none";
    }
  });

  projectsDropDown.forEach(function (project) {
    if (project.style.display == "block") {
      project.style.display = "none";
    }
  });
};

const displayProjectToggle = (e) =>{
  hideAllDropDownElements();
  let projectList = Array.from(document.querySelectorAll(".project-list"));
  
  projectList.forEach((element) =>{
     element.classList.remove("project-active");

  });
 
  if(e.target.matches("span")){
    e.target.parentElement.classList.toggle("project-active");
   return;
  }
  e.target.classList.toggle("project-active");
}

const generateTaskByCompletedStatus = (todoTaskInfo,tasksList,taskPosition) => {
  let element;
  if (tasksList[taskPosition].completed) {
     element = "s";
  }else{
    element = "span";
  }
    let taskTitle = document.createElement(element);
    taskTitle.className = "task-title";
    taskTitle.textContent = tasksList[taskPosition].title;
    todoTaskInfo.appendChild(taskTitle);

    let taskDate = document.createElement(element);
    taskDate.className = "task-date";
    taskDate.textContent = tasksList[taskPosition].dueDate;

    todoTaskInfo.appendChild(taskDate);

    let projectsList = JSON.parse(localStorage.getItem("projectsList"));
    let taskProjectName = document.createElement(element);
    taskProjectName.className = "task-project";
    taskProjectName.textContent = projectsList[tasksList[taskPosition].project];
    todoTaskInfo.appendChild(taskProjectName);
  
}

const checkTaskCompletedStatus = (task) => {
  let innerHTML
  if (task.completed) {
     innerHTML = '<i class="bi bi-check-lg"></i>';
     return innerHTML;
    }
    
    innerHTML = '<i class="bi bi-x-lg"></i>';
    return innerHTML;

}

const generateNewStatusChangedTask = (todoTaskInfo,task)=>{
  const taskTitle = todoTaskInfo.children[1];
  const taskDate = todoTaskInfo.children[2];
  const taskProject = todoTaskInfo.children[3];
  
  let element;
  if (task.completed) {
    element = "s";
 }else{
   element = "span";
 }

 let newTaskTitle = document.createElement(element);
    newTaskTitle.className = "task-title";
    newTaskTitle.textContent = taskTitle.textContent;
    todoTaskInfo.replaceChild(newTaskTitle,taskTitle);
    
    let newTaskDate = document.createElement(element);
    newTaskDate.className = "task-date";
    newTaskDate.textContent = taskDate.textContent;
    todoTaskInfo.replaceChild(newTaskDate,taskDate);

    let projectsList = JSON.parse(localStorage.getItem("projectsList"));
    let newTaskProjectName = document.createElement(element);
    newTaskProjectName.className = "task-project";
    newTaskProjectName.textContent = projectsList[task.project];
    todoTaskInfo.replaceChild(newTaskProjectName,taskProject);
 
}