 class Task {
  constructor(title,description,dueDate,priority,project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}

const addTask = document.getElementById('addTask');
addTask.addEventListener('click',(e)=>{
  let task = new Task(
    document.getElementById("taskName").value,
    document.getElementById("taskDesc").value,
    document.getElementById("appt").value,
    document.getElementById("priority").value,
    document.getElementById("project").value
  );
  console.log(task.title);
  console.log(task.description);
  console.log(task.dueDate);
  console.log(task.priority);
  console.log(task.project);
})

const cancelModalTask = document.getElementById("cancelform");
cancelModalTask.addEventListener("click",()=>{
  const modal = document.querySelector(".modal");
  modal.style.display="none";
})



