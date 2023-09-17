import './styles.css';
import { displayHome } from './home';
import { displayContacts } from './contact';
import { displayMenu } from './menu';

function addHeader() {
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
  menu.className = "tab hidden"
  menu.innerText = "Menu";
  header.appendChild(menu);

  let contact = document.createElement("div"); 
  contact.id = "contact";
  contact.className = "tab hidden"
  contact.innerText = "Contact";
  header.appendChild(contact);

  let content = document.createElement("div");
  content.id = "content";

  body.prepend(header);
  body.appendChild(content);
}

addHeader();
displayHome();
displayMenu();
//displayContacts();
