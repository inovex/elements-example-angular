import { Component } from '@angular/core';
import {Todo} from '../shared/models/todo';
import {TodoService} from '../shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Array<Todo>;

  newTodoName: string;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getRandomTodos();
  }

  onValueChanged($event: any) {
    this.newTodoName = $event.target.value;
  }

  add() {
    this.todos.push(new Todo(this.newTodoName));
    this.newTodoName = '';
  }

  delete(index: number, todo: Todo) {
    this.todos = this.todos.filter((currentTodo) => currentTodo !== todo);
  }
}
