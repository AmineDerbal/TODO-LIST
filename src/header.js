const modal = document.querySelector(".modal");
const header = () =>{
  const headerTag = document.createElement('header');
  headerTag.classList.add('header');
  document.body.appendChild(headerTag);

  const div = document.createElement('div');
  headerTag.appendChild(div);

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent="My Todo List App !";
  headerTag.appendChild(headerTitle);

  const headerTask = document.createElement('div');
  headerTask.classList.add('header-task');
  headerTag.appendChild(headerTask);
   
  const headerButton = document.createElement('button');
  headerButton.classList.add('button');
  headerTask.appendChild(headerButton);
  
  headerButton.innerHTML='<i class="bi bi-plus-square"></i>  add Task';
 

  headerButton.addEventListener('click',()=>{
    
    modal.style.display='block';
    
  })

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}


export default header