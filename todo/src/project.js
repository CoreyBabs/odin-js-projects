import { Todo } from "./todo";

export class Project {
  constructor(name, todos) {
    this.name = name;
    this.todos = todos;
  }

  nameValue() {
    return this.name.toLowerCase();
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].equals(todo)) {
        this.todos.splice(i, 1);
      }
    }
  }
} 
