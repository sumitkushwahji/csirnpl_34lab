import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl; // Set your Django API URL in the environment.ts file

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    const loginEndpoint = ''; // Replace with the login endpoint of your Django API
    return this.http.post<any>(`${this.apiUrl}${loginEndpoint}`, credentials);
  }

  signup(signupCredentials: any): Observable<any> {
    const signupEndpoint = '/signup/'; // Replace with the signup endpoint of your Django API
    return this.http.post<any>(`${this.apiUrl}${signupEndpoint}`, signupCredentials);
  }
}
