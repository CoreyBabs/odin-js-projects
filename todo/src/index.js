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
      selectedProj = proj;
    }
  }
}

function updateTodoTable() {
  let table = document.querySelector("#todo-table");
  for (let todo of selectedProj.todos) {
    let row = table.insertRow(table.rows.length);

    let title = row.insertCell(0);
    title.innerHTML = todo.title;

    let description = row.insertCell(1);
    description.innerHTML = todo.description;

    let due = row.insertCell(2);
    due.innerHTML = todo.dueDate;

    let prio = row.insertCell(3);
    prio.innerHTML = todo.priority;

    let complete = row.insertCell(4);
    let comp_chk = document.createElement("input");
    comp_chk.setAttribute("type", "checkbox");
    comp_chk.checked = todo.checked;
    console.log(todo);
    complete.appendChild(comp_chk);

    let del = row.insertCell(5);
    let del_btn = document.createElement("button");
    del_btn.innerText = "Delete";
    del.appendChild(del_btn);
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

let test2 = new Todo("Test2", "A second test item", "09/19/2023", "2", true);

let proj = new Project("Test Project", [test, test2]);
console.log(proj);

let today = new Project("Today", [test, test2]);

let projects = [today, proj];

updateProjectList(true);

let addProj = document.querySelector("#proj-add");
addProj.addEventListener("click", () => addNewProject(false));
let selectedProj = today;
updateTodoTable();
