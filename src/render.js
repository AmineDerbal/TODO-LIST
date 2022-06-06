import { displayAllTasks } from "./task";
export const renderAllTasks = (tasksList) => {
  
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i=0; i<tasksList.length; i++){
    
    let taskContainer = document.createElement("div");
    taskContainer.className = "task-container";
    content.appendChild(taskContainer);

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
 
  priority.className = `priority priority-$(task.priority)`;
 
  todoTaskInfo.appendChild(priority);
 
  let taskTitle = document.createElement("span");
  taskTitle.className = "task-title";
  taskTitle.textContent = tasksList[i].title;
  
  todoTaskInfo.appendChild(taskTitle);
  
  let taskDate = document.createElement("span");
  taskDate.className = "task-date";
  taskDate.textContent = tasksList[i].dueDate;
  
  todoTaskInfo.appendChild(taskDate);

  
  let groupButton = document.createElement("div");
  groupButton.className = "group-button";
  
  todoTaskInfo.appendChild(groupButton);
  
  
todoTaskButton.addEventListener("click",(e)=>{
  groupButton.classList.toggle("active");
  console.log(e.target.className);
      let panel = todoTaskButton.children[1];
      console.log(panel.className);

      togglePanel(panel);


});


  let optionButton = document.createElement("button");
  optionButton.className = "option-button";
  optionButton.innerHTML ='<i class="bi bi-three-dots-vertical"></i>';
  
  groupButton.appendChild(optionButton);
  
  let dropDown = document.createElement('div');
  dropDown.className ="dropdown-content";
  
  taskContainer.appendChild(dropDown);

  optionButton.addEventListener("click", (e) => {
    e.stopPropagation();
    
    dropDown.style.display = (dropDown.style.display === 'block') ? 'none':'block';
  
  
    
  });
  
  
  let editButton = document.createElement('button');
  editButton.className = "button dropdown-edit";
  editButton.innerHTML = '<i class="bi bi-pencil"></i> Edit';
  
  let removeButton = document.createElement('button');
  removeButton.className = "button dropdown-remove";
  removeButton.innerHTML = '<i class="bi bi-trash"></i> Remove';
  
  dropDown.appendChild(editButton);
  dropDown.appendChild(removeButton);
            
   
  
    removeButton.addEventListener("click", ()=>{
      removeTask(tasksList,i);
    })
  
  
    editButton.addEventListener("click",(e)=>{
      e.preventDefault();
      
      console.log("hello");
    })

    let taskPanel = document.createElement("div");
    taskPanel.className = "panel";
    taskPanel.textContent = tasksList[i].description;
    
    todoTaskButton.appendChild(taskPanel);
    
    };
}






const togglePanel =(panel) =>{
 
      if (panel.style.display == "block") {
        setTimeout(()=>{
          
          panel.style.display = "none";
        },80)
      } else {
        setTimeout(()=>{
          
          panel.style.display = "block";
        },80)
      }
}

const removeTask = (tasks,number) =>{
   tasks.splice(number,1);
  localStorage.setItem("tasks",JSON.stringify(tasks));
  displayAllTasks();
}