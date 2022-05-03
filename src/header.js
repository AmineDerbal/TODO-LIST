const header = () =>{
  const headerTag = document.createElement('header');
  headerTag.classList.add('header');
  document.body.appendChild(headerTag);

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent="My Todo List App !";
  headerTag.appendChild(headerTitle);

}


export default header