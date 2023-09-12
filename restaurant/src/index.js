import './styles.css';

function addHeader() {
  console.log(document.body);
  let body = document.querySelector("body");
  
  let header = document.createElement("div");
  header.id = "header";
  
  let home = document.createElement("div"); 
  home.id = "home";
  home.className = "tab"
  home.innerText = "Home";
  header.appendChild(home);


  let menu = document.createElement("div"); 
  menu.id = "menu";
  menu.className = "tab"
  menu.innerText = "Menu";
  header.appendChild(menu);

  let contact = document.createElement("div"); 
  contact.id = "contact";
  contact.className = "tab"
  contact.innerText = "Contact";
  header.appendChild(contact);

  body.appendChild(header);
}

addHeader();
