const mainContent = ()=>{
 
const main = document.createElement('div');
main.classList.add('main');
document.body.appendChild(main);

const sidebar = document.createElement('nav');
sidebar.classList.add('sidebar');
main.appendChild(sidebar);

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