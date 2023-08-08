import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private list = new TodoList("Mustafá", [
    new TodoItem("Correr as 17 horas"),
    new TodoItem("Pegar Flores na Floricultura"),
    new TodoItem("Comprar pão Padaria", true),
    new TodoItem("Pagar conta luz")
  ]);

  //Capturar usuario
  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.item.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.item;
  }


}
