// NgModule is used to define an Angular module
import { NgModule } from '@angular/core';

// BrowserModule is required to run Angular app in the browser
import { BrowserModule } from '@angular/platform-browser';

// FormsModule is needed for template-driven forms
// It enables ngModel (two-way data binding)
import { FormsModule } from '@angular/forms';

// Root component of the application
import { AppComponent } from './app.component';

// LoginComponent handles login form UI and user input
import { LoginComponent } from './login/login.component';

// DashboardComponent represents dashboard screen (if any)
import { DashboardComponent } from './dashboard/dashboard.component';

// MessageComponent is used to show success / error messages
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  /*
    declarations:
    - All components, directives, and pipes that belong to this module must be declared here
  */
  declarations: [
    AppComponent,        // Root component
    LoginComponent,      // Login form component
    DashboardComponent,  // Dashboard UI component
    MessageComponent     // Message display component
  ],

  /*
    imports:
    - Other Angular modules whose features are needed in this module
  */
  imports: [
    BrowserModule, // Required for browser-based apps
    FormsModule ,   // Enables ngModel and forms
    AppRoutingModule
  ],

  /*
    providers:
    - Used for services (dependency injection)
    - Empty for now because we are frontend-only
  */
  providers: [],

  /*
    bootstrap:
    - Defines the starting component of the app
    - Angular starts rendering from AppComponent
  */
  bootstrap: [AppComponent]
})

// This line defines and exports the root Angular module of the application so that Angular can start and manage the app.
export class AppModule { }
