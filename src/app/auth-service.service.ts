import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


  //AuthService handles authentication-related operations.
  //Currently used for frontend API integration .

@Injectable({
  providedIn: 'root' // Single instance available across the application
})
export class AuthService {

  // Base URL for backend api,will use in backend integration
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {} // HttpClient injected for API calls

  
    //Calls login API with email and password
    //Returns Observable (HTTP POST)
  
  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      email,
      password
    });
  }

  
   // Saves JWT token in browser storage
  
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  
    //Retrieves JWT token from storage
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  
    //Checks whether user is authenticated
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

logout(): void {
  localStorage.removeItem('token');
}
}
