import { Component } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[]=[];

  
constructor(){
  this.getItem();
}


  getItem(){
     let list =localStorage.getItem("todos");

    if(list ==null){

      this.todos=[];
    }else{

      this.todos=JSON.parse(list);
    }




  
  }

  delete(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.getItem();

  }

  addTodo(event:Todo){

  
    if(event.title !=null && event.title !='' && event.description !=null  && event.description !=''){


      console.log("addddddddddddddd")
      this.todos.push(event);
      localStorage.setItem("todos",JSON.stringify(this.todos));

      this.getItem();
    }

  

  }

  checkBox(event:boolean,i:number){
    // const index=this.todos.indexOf(todo);


    if(event){

      this.todos[i].active=false;
      localStorage.setItem("todos",JSON.stringify(this.todos));


      this.getItem();

    }else{
      this.todos[i].active=true;
      localStorage.setItem("todos",JSON.stringify(this.todos));


      this.getItem();
    }
   

  }

}
