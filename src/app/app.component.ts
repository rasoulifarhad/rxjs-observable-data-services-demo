import { Component } from '@angular/core';
import { TodoStore } from './todo/state/todo-store';
import { UiStateStore } from './todo/state/ui-state-store';
import { map } from 'rxjs';
import { Todo } from './todo/model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private todoStore$: TodoStore, private uiStateStore$: UiStateStore) {

  }

  get size() {
    return this.todoStore$.todos.pipe(map(res => res.length));
  }

  get uiStateMessage() {
    return this.uiStateStore$.uiState.pipe(map(uiState => uiState.message));
  }

  onAddTodo(description: string) {
    let newTodo = new Todo( Math.floor(1000 * Math.random()), description, false);
    this.uiStateStore$.startBackendAction('Saving Todo...');
    this.todoStore$.addTodo(newTodo)
                      .subscribe(
                        res => {
                          this.uiStateStore$.endBackendAction();
                        },
                        err => {
                          this.uiStateStore$.endBackendAction();
                        }
                      );


  }

}

function getRandomInt(min: number, max: number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

