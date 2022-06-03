 import {renderAllTasks} from './render.js';
 
 class Task {
  constructor(title,description,dueDate,priority,project,completed){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }
}

 let tasksList = [] ;


const addTask = document.getElementById('addTask');
addTask.addEventListener('click',()=>{

  let task = new Task(
    document.getElementById("taskName").value,
    document.getElementById("taskDesc").value,
    document.getElementById("appt").value,
    document.getElementById("priority").value,
    document.getElementById("project").value
  );
  tasksList.push(task);
  localStorage.setItem("tasks",JSON.stringify(tasksList));
  cancelModalTask();

  console.log(task.title);
  console.log(task.description);
  console.log(task.dueDate);
  console.log(task.priority);
  console.log(task.project);
});

const cancelModalTask = () => {
  const modal = document.querySelector(".modal");
  modal.style.display="none";
} 

const cancel = document.getElementById("cancelform");
cancel.addEventListener("click",()=>{
cancelModalTask();
  
})


export const displayAllTasks = () => {
 

if (!localStorage.getItem('tasks')){
  tasksList = [];
  return;
} 

tasksList = JSON.parse(localStorage.getItem("tasks"));
console.log(tasksList);

renderAllTasks(tasksList);
 






}



