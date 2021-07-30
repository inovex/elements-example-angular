import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './services/todo.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        TodoService
    ],
    exports: [
    ],
    declarations: [
    ]
})
export class SharedModule { }
