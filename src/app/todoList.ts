import { TodoItem } from "./todoItem";

export class TodoList {

  constructor(public user: string, private todoItens: TodoItem[] = []) { }

  addItem(task: string) {
    this.todoItens.push(new TodoItem(task));
  }

  get item(): readonly TodoItem[] {
    return this.todoItens;
  }


}
