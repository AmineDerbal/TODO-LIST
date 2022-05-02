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


sidebar.textContent= "SHOW";
}


export default mainContent