import './styles.css';
import { Todo } from './todo';
import { Project } from './project';

function updateProjectList() {
  if (projects.length === 0) {
    projects.push(today);
  }

  updateProjectSelection(true);
}

function updateProjectSelection(firstLoad) {
  let select = document.querySelector("#proj-select");
  select.replaceChildren([]);
  for (let i = 0; i < projects.length; i++) {
    let proj = projects[i];
    let opt = document.createElement('option');
    opt.value = proj.nameValue();
    opt.innerHTML = proj.name;
    select.appendChild(opt);
    if (!firstLoad && i === projects.length - 1) {
      select.value = proj.nameValue();
    }
  }
}

function addNewProject() {
  let title = document.querySelector("#new-proj").value;
  if (!title) {
    return;
  }
  
  let newProj = new Project(title, []);
  projects.push(newProj);
  updateProjectSelection();
}


let test = new Todo("Test", "A test item", "09/18/2023", "1", false);
console.log(test);

let test2 = new Todo("Test2", "A second test item", "09/19/2023", "2", false);

let proj = new Project("Test Project", [test, test2]);
console.log(proj);

let today = new Project("Today", []);

let projects = [today, proj];

updateProjectList(true);

let addProj = document.querySelector("#proj-add");
addProj.addEventListener("click", () => addNewProject(false));

