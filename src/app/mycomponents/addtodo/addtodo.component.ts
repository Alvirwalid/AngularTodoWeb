import { Component ,Output,EventEmitter} from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {

@Output() todoAdd:EventEmitter<Todo>=new EventEmitter();


todo!:Todo;
title!:string;
description!:string;
active!:boolean

  onSubmit(){
    var myDate = new Date();
    var varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();
    if (varID.length > 15) {
      varID = varID.substring(0, 15);
    }


    this.todo={
      id:Number(varID),
      title:this.title,
      description:this.description,
      active:this.active
    }


    this.todoAdd.emit(this.todo);

    this.title='';
    this.description='';
    this.active=false;
 

  }

}
