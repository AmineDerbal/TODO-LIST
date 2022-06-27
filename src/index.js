import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {  displayAllTasks } from "./task.js";
import header from "./header.js";
import mainContent from "./mainContent.js";

header();
mainContent();
displayAllTasks();

const taskModal = document.querySelector(".myModal");
const projectModal = document.querySelector(".projectModal");

window.onclick = function (e) {
  if((document.querySelector(".modal-edit-task") !== null) && (e.target == document.querySelector(".modal-edit-task"))){
  document.body.removeChild(document.querySelector(".modal-edit-task"));
  }

 if((document.querySelector(".edit-project-modal")!== null) && (e.target == document.querySelector(".edit-project-modal"))) {
  document.body.removeChild(document.querySelector(".edit-project-modal"));
 }
  
  if (e.target == taskModal) {
    taskModal.style.display = "none";  
  } 
  
  
  if (e.target == projectModal) {
    projectModal.style.display = "none";
    document.getElementById("projectName").value = "";
    
  }
 /* if(e.target == editProjectModal) {
    editProjectModal.parentElement.removeChild(editProjectModal);
  }*/
};
