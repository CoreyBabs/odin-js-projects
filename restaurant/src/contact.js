import Penguin from './assets/chef penguin.jpg';
import Duck from './assets/duck.jpg';
import Dog from './assets/akita.jpg';
export function displayContacts() {
  let content = document.querySelector("#content");

  // clear the child nodes
  content.replaceChildren([]);

  let d1 = createDiv("Corey", Penguin, "Chef", "111-123-456", "penguin@penguin.com")
  let d2 = createDiv("Goose", Duck, "Assistant", "111-123-457", "goose@penguin.com")
  let d3 = createDiv("Bella", Dog, "Taste Tester", "111-123-458", "bella@penguin.com")

  content.appendChild(d1);
  content.appendChild(d2);
  content.appendChild(d3);

}

function createDiv(name, image, role, number, email) {
  let div = document.createElement("div");
  div.className = "contact";
  
  let h2 = document.createElement("h2");
  h2.className = "name";
  h2.innerText = name; 

  let img = new Image();
  img.src = image;
  img.className = "image";

  let roleP = document.createElement("p");
  roleP.className = "role";
  roleP.innerText = role;


  let numP = document.createElement("p");
  numP.className = "number";
  numP.innerText = number;

  let emailP = document.createElement("p");
  emailP.className = "email";
  emailP.innerText = email;

  div.appendChild(h2);
  div.appendChild(img);
  div.appendChild(roleP);
  div.appendChild(numP);
  div.appendChild(emailP);

  return div;
}
