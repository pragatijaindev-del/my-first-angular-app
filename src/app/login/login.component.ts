import { Component, OnInit } from '@angular/core';


// this interface is only for defining  data structure ,it tells us what comes in login data
  
interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login', // custom html tag name
  templateUrl: './login.component.html'
})

//This class controls the login form UI, collects user input, validates it, and sends the login data to the parent component.
export class LoginComponent implements OnInit {

  //  this variable will bind to input feilds .
  email: string = '';
  password: string = '';
    // Message text jo user ko dikhega
  message: string = '';

  // Message ka type (success / error)
  messageType: 'success' | 'error' | '' = '';
 
 //when component will load this method will called,this method is part of life cycle hook
  ngOnInit(): void {
    console.log('LoginComponent loaded');
  }

  
 // this method will run when login button click will happen,we will send data to parent from here
  login(): void {

     if (this.email && this.password) {
      this.message = 'Login successful';
      this.messageType = 'success';
    } else {
      this.message = 'Login failed. Please try again';
      this.messageType = 'error';
    }

    // for form clearation
    this.email = '';
    this.password = '';
  }

}
