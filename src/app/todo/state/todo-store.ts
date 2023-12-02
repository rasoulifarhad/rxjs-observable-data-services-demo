import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, findIndex, of } from 'rxjs';
import { Todo } from '../model/todo';
import { TodoBackendService } from '../../todo/services/todo-backend.service';

@Injectable({
  providedIn: 'root'
})
export class TodoStore {

  private _todos$ : BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor(private todoBackend: TodoBackendService) {
    this.loadInitalData();
  }

  get todos() : Observable<Todo[]> {
    return this._todos$.asObservable();
  }

  // public readonly todos$: Observable<Todo[]>  =  this._todos$.asObservable();

  loadInitalData() {
    this.todoBackend.getAllTodos()
          .subscribe(
            value => {
              this._todos$.next(value)
            },
            undefined,
            () => console.log("Error retrieving Todos")
          );
  }

  addTodo(newTodo: Todo) : Observable<void> {
    console.log('Todo:', newTodo);
    let savedTodo$ = this.todoBackend.saveTodo(newTodo);
    savedTodo$.subscribe(
      () => {
        console.log('subscribe:', newTodo);
        // this._todos$.getValue().push(todo)
        this._todos$.next([...this._todos$.getValue(), newTodo]);
      }
    );
    return savedTodo$;

  }

  deleteTodo(deleted: Todo) : void{
    this.todoBackend.deleteTodo(deleted)
          .subscribe(
            () => {
              let todos: Todo[] = this._todos$.getValue();
              this._todos$.next(todos.filter(todo => todo.id !== deleted.id));
            }
          );
  }

  toggleTodo(todo: Todo) : void{
    this.todoBackend.toggleTodo(todo)
          .subscribe(
            () => {
              let todos: Todo[] = this._todos$.getValue();
              this._todos$.next(
                todos.map(t => {
                  if(t.id === todo.id) {
                    t.completed = !t.completed;
                  }
                  return t;
                })
              );
            }
          );
  }
}
