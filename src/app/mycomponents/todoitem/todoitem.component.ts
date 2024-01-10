import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css'
})
export class TodoitemComponent {
@Input() item!:Todo;
@Input() index!:number;
@Output() deleteTodo:EventEmitter<Todo>=new EventEmitter();
@Output() check:EventEmitter<boolean>=new EventEmitter();

onDelete(todo:Todo){

  this.deleteTodo.emit(todo);

}

checkBox(isCheck:boolean){

  console.log(isCheck);

  this.check.emit(isCheck);
  

}


}
