import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { TodoitemComponent } from './mycomponents/todoitem/todoitem.component';
import { AddtodoComponent } from './mycomponents/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycomponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemComponent,
    AddtodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
