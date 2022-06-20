import { newProjectModal } from "./modal";
import { displayProject, hideAllDropDownElements } from "./render";

const mainContent = () => {
  const main = document.createElement("div");
  main.classList.add("main");
  document.body.appendChild(main);

  //Create a modal to add new project
  newProjectModal();

  // create a sidebar
  const sidebar = document.createElement("nav");
  sidebar.classList.add("sidebar");
  main.appendChild(sidebar);

  const newProject = document.createElement("button");
  newProject.classList.add("button");
  newProject.id = "newProject";
  newProject.innerHTML = '<i class="bi bi-plus-lg"></i>  New Project';
  sidebar.appendChild(newProject);

  const modal = document.querySelector(".projectModal");

  newProject.addEventListener("click", () => {
    hideAllDropDownElements();
    if (modal.style.display == "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  });

  const project = document.createElement("div");
  project.classList.add("project");
  sidebar.appendChild(project);

  if (
    !localStorage.getItem("projectsList") ||
    JSON.parse(localStorage.getItem("projectsList")).length == 0
  ) {
    let projectsList = [];
    projectsList.push("default-project");
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
  }

  displayProject();

  //Create a content section where todo lists whill be displayed
  const content = document.createElement("div");
  content.classList.add("content");
  main.appendChild(content);
};

export default mainContent;
