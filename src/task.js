import { renderAllTasks } from "./render.js";

class Task {
  constructor(title, description, dueDate, priority, project, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }
}

let tasksList = [];

const addTask = document.getElementById("addTask");
addTask.addEventListener("click", () => {
    if(document.getElementById("taskName").value === ""){
      document.querySelector('.task-error').textContent = "please input a title for the task";
    }

    if(document.getElementById("appt").value === ""){
      document.querySelector('.date-error').textContent = "please input a date for the task";
    }

    if((document.getElementById("taskName").value === "")||(document.getElementById("appt").value==="")){
      return;
    }
    
  let task = new Task(
    document.getElementById("taskName").value,
    document.getElementById("taskDesc").value,
    document.getElementById("appt").value,
    document.getElementById("priority").value,
    document.getElementById("project").value
  );
  document.querySelector('.task-error').textContent = "";
  document.querySelector('.date-error').textContent = "";  
  tasksList.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasksList));
  cancelModalTask();
  const projectName = checkSelectedProject();
  if(projectName === undefined){
    displayAllTasks();
  }else{

    displayAllTasks(projectName);
  }
});

const cancelModalTask = () => {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
};

const cancel = document.getElementById("cancelform");
cancel.addEventListener("click", () => {
  cancelModalTask();
});

export const displayAllTasks = (projectName) => {
  if (!localStorage.getItem("tasks")) {
    tasksList = [];
    return;
  }

  tasksList = JSON.parse(localStorage.getItem("tasks"));
  if (projectName === undefined){
    renderAllTasks(tasksList); 
    return;
  }
  renderAllTasks(tasksList,projectName);
  
};

export const checkSelectedProject = ()=>{
  let projectList = Array.from(document.querySelectorAll(".project-list"));
  let projectName;
  projectList.forEach((element) =>{
   if (element.classList.contains("project-active")){
    console.log(element.getAttribute('data-project'));
     projectName = element.getAttribute('data-project');
    
   }
   
 });
  return projectName;

}