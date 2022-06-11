

export const newProjectModal = () =>{

  const projectModal = document.createElement("div");
  projectModal.className = "modal";
  projectModal.id = "projectModal";

  document.body.appendChild(projectModal);

  const projectModalContent = document.createElement("div");
  projectModalContent.className = "project-modal-content";

  projectModal.appendChild(projectModalContent);

  const projectNameInput = document.createElement("input");
  projectNameInput.id = "projectName";
  projectNameInput.type = "text";
  projectNameInput.placeholder = "Project Name";
  projectNameInput.required = true;
 projectModalContent.appendChild(projectNameInput);

 const projectNameSubmitButton = document.createElement("button");
 projectNameSubmitButton.id = "ProjectSubmitButton";
 projectNameSubmitButton.classList.add("button");
 projectNameSubmitButton.textContent = "Submit";
 projectModalContent.appendChild(projectNameSubmitButton);
}