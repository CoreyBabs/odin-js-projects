export class Todo {
  constructor(title, description, dueDate, priority, checked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
  }

  equals(todo) {
    return this.title === todo.title &&
      this.description === todo.description &&
      this.dueDate === todo.dueDate &&
      this.priority === todo.priority &&
      this.checked === todo.checked;
  }

  toggleCheck() {
    this.checked = !this.checked;
  }
}

export function todoFromJSON(todo) {
  return new Todo(todo["title"], todo["description"], todo["dueDate"], todo["priority"], todo["checked"]);
}
