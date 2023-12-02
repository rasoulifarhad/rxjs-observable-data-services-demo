import { Component } from '@angular/core';
import { TodoStore } from '../state/todo-store';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {


  todoStore$: TodoStore;

  constructor(todoStore$: TodoStore) {
    this.todoStore$ = todoStore$;
  }

  onToggleTodo(todo: Todo) {
    console.log('toggle:', todo);
    this.todoStore$.toggleTodo(todo);
  }

  delete(todo: Todo) {
    console.log('Delete todo: ', todo);
    this.todoStore$.deleteTodo(todo);
  }

}
