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
  if (e.target == taskModal) {
    taskModal.style.display = "none";
  } else if (e.target == projectModal) {
    projectModal.style.display = "none";
  }
};
