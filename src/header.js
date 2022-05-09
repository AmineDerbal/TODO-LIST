
const header = () =>{
  const headerTag = document.createElement('header');
  headerTag.classList.add('header');
  document.body.appendChild(headerTag);

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent="My Todo List App !";
  headerTag.appendChild(headerTitle);

  const headerTask = document.createElement('div');
  headerTask.classList.add('header-task');
  headerTag.appendChild(headerTask);

  const addTask = document.createElement('i');
  addTask.className='bi bi-plus-square';
  headerTask.textContent = "add Task";
  headerTask.appendChild(addTask);

  headerTask.addEventListener('click',()=>{
    
  })

}


export default header