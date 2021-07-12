import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './services/todo.service';
import { DividerComponent } from './components/divider/divider.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        TodoService
    ],
    exports: [
        DividerComponent
    ],
    declarations: [
        DividerComponent
    ]
})
export class SharedModule { }
