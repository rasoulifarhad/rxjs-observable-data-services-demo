import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from '../model/todo';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoBackendService {

  constructor(private httpClient: HttpClient) { }

  getAllTodos() : Observable<Todo[]>{
    return this.httpClient.get<Todo[]>('http://localhost:8081/todos')
  }

  saveTodo(newTodo: Todo) : Observable<void>{
    return this.httpClient.post<void>('http://localhost:8081/todos', newTodo).pipe(shareReplay());
  }

  deleteTodo(deletedTodo: Todo) : Observable<void> {
    let params = new HttpParams().set('id', deletedTodo.id);
    return this.httpClient.delete<void>(`http://localhost:8081/todos`, {params: params});
  }

  toggleTodo(toggled: Todo) :  Observable<void>{
    return this.httpClient.put<void>('http://localhost:8081/todos', toggled);
  }
}
