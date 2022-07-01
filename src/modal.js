import { displayProject } from "./render";

export const newProjectModal = () => {
  const projectModal = document.createElement("div");
  projectModal.className = "modal projectModal";

  document.body.appendChild(projectModal);

  const projectModalContent = document.createElement("div");
  projectModalContent.className = "project-modal-content";

  projectModal.appendChild(projectModalContent);

  const projectNameInput = document.createElement("input");
  projectNameInput.id = "projectName";
  projectNameInput.type = "text";
  projectNameInput.placeholder = "Project Name";
  projectModalContent.appendChild(projectNameInput);

  const projectNameError = document.createElement("div");
  projectNameError.className = "error project-name-error";
  projectModalContent.appendChild(projectNameError);

  const projectNameSubmitButton = document.createElement("button");
  projectNameSubmitButton.id = "ProjectSubmitButton";
  projectNameSubmitButton.classList.add("button");
  projectNameSubmitButton.textContent = "Submit";
  projectModalContent.appendChild(projectNameSubmitButton);

  projectNameSubmitButton.addEventListener("click", () => {
    if (projectNameInput.value == "") {
      projectNameError.textContent = "please input project name";
      return;
    }
    
    let projectsList = JSON.parse(localStorage.getItem("projectsList"));
    for(let projectPosition = 0; projectPosition < projectsList.length; projectPosition++){
      if (projectNameInput.value == projectsList[projectPosition]){
          projectNameError.textContent = "this project already exists";
          return;
      }
    }
    

    projectNameError.textContent = "";

    projectsList.push(projectNameInput.value);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    displayProject();
    projectNameInput.value = "";
    projectModal.style.display = "none";
  });
};
