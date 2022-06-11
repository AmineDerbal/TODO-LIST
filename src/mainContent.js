import { newProjectModal } from "./modal";

const mainContent = ()=>{
 
const main = document.createElement('div');
main.classList.add('main');
document.body.appendChild(main);

newProjectModal();

const sidebar = document.createElement('nav');
sidebar.classList.add('sidebar');
main.appendChild(sidebar);

const newProject = document.createElement('button');
newProject.classList.add('button');
newProject.id="newProject";
newProject.innerHTML = '<i class="bi bi-plus-lg"></i>  New Project';
sidebar.appendChild(newProject);

  const content = document.createElement('div');
content.classList.add('content');
main.appendChild(content);

const project = document.createElement('div');
project.classList.add('project');
sidebar.appendChild(project);

const allTasks = document.createElement('a');
allTasks.classList.add('all-tasks');
allTasks.textContent = "All TASKS";
project.appendChild(allTasks);

const defaultProject = document.createElement('a');
defaultProject.classList.add('default-project');
defaultProject.textContent = "Default Project";
project.appendChild(defaultProject);


}


export default mainContent