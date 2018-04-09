import { Todo } from './shared/models/todo';
import { TodoService } from './shared/services/todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<Todo>;

  newTodoName: string;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getRandomTodos();
  }

  onValueChanged($event: CustomEvent) {
    this.newTodoName = $event.detail;
  }

  add() {
    this.todos.push(new Todo(this.newTodoName));
    this.newTodoName = '';
  }

  delete(index: number, todo: Todo) {
    this.todos = this.todos.filter(currentTodo => currentTodo !== todo);
  }
}
