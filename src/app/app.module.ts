import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './message/message.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { UppercaseFirstPipe } from './uppercase-first-pipe.service';
import { HttpClientModule } from '@angular/common/http';

// groups realated buildong blocks
@NgModule({
  // Registers components and pipes with this module
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    CreateTodoComponent,
    TodoListComponent,
    UppercaseFirstPipe
  ],
  // Required for any browser-based Angular app

// Provides DOM rendering, change detection, directives (*ngIf, *ngFor)
   
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,// enblaes ngmodel ,important for  template driven forms
    AppRoutingModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
