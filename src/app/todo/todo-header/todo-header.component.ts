import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {

  @Output()
  todo = new EventEmitter<string>();

  addTodo(input: HTMLInputElement) {
    this.todo.emit(input.value);
    input.value = '';
  }
}
