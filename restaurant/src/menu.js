import Waffle from './assets/waffle.jpg'
import Brownie from './assets/brownie.jpg'
import Cookie from './assets/cookie.jpg'
import Pie from './assets/pie.jpg'
export function displayMenu() {
  let content = document.querySelector("#content");

  // clear the child nodes
  content.replaceChildren([]);

  let d1 = createMenuItem("Pie", Pie, "Apple pie with a nice flaky crust.")
  let d2 = createMenuItem("Brownie", Brownie, "Chocolate brownies with a crispy outside and gooey inside.")
  let d3 = createMenuItem("Cookie", Cookie, "Oatmeal raisin cookies that are better than chocolate chip cookies.")
  let d4 = createMenuItem("Waffle", Waffle, "Waffles cooked to perfection.")

  content.appendChild(d1);
  content.appendChild(d2);
  content.appendChild(d3);
  content.appendChild(d4);
}

function createMenuItem(name, image, description) { 
  let div = document.createElement("div");
  div.className = "menu-item";
  
  let h2 = document.createElement("h2");
  h2.className = "name";
  h2.innerText = name; 

  let img = new Image();
  img.src = image;
  img.className = "image";

  let desP = document.createElement("p");
  desP.className = "description";
  desP.innerText = description;

  div.appendChild(h2);
  div.appendChild(img);
  div.appendChild(desP);
  
  return div;
}
