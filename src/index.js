import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {  displayAllTasks } from "./task.js";
import header from "./header.js";
import mainContent from "./mainContent.js";

header();
mainContent();
displayAllTasks();


window.onclick = function (e) {
  const taskModal = document.querySelector(".myModal");
  const projectModal = document.querySelector(".projectModal");
  const editProjectModal = document.querySelector(".edit-project-modal");
  
  if (e.target == taskModal) {
    taskModal.style.display = "none";
    return;
  }  if (e.target == projectModal) {
    projectModal.style.display = "none";
    document.getElementById("projectName").value = "";
    return;
  }
  if(e.target == editProjectModal) {
    editProjectModal.parentElement.removeChild(editProjectModal);
  }
};
