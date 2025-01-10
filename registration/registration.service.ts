import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/users.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
  }
  getReg(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // Method to register a user
  registerUser(regData: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, regData);
  }
}
