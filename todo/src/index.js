import { Todo } from './todo';
import { Project } from './project';

let test = new Todo("Test", "A test item", "09/18/2023", "1", false);
console.log(test);

let test2 = new Todo("Test2", "A second test item", "09/19/2023", "2", false);

let proj = new Project("Test Project", [test, test2]);
console.log(proj);


