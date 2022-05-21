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
})

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
const content = document.querySelector(".content"); 
content.innerHTML = "";

for (let i=0; i<tasksList.length; i++){
  console.log(tasksList[i].title);

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

priority.className = `priority priority-$(tasksList[i].priority)`;

todoTaskInfo.appendChild(priority);

let taskTitle = document.createElement("span");
taskTitle.className = 'task-title';
taskTitle.textContent = tasksList[i].title;

todoTaskInfo.appendChild(taskTitle);

let taskDate = document.createElement("span");
taskDate.className = 'task-date';
taskDate.textContent = tasksList[i].dueDate;

todoTaskInfo.appendChild(taskDate);

let editButton = document.createElement("button");
editButton.className = 'button edit-button';
editButton.textContent = "Edit";

todoTaskInfo.appendChild(editButton);


 


/*let number = document.createElement("div");
  number.id ='task-number-'+i;
  number.classList.add('tasks-grid');
  //content.appendChild(number);

  

  let title = document.createElement("p");
  title.textContent = tasksList[i].title;
  number.appendChild(title);*/

}



}



