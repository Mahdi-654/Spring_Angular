// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string;
  name: string;
  password: string;
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  // 🟢 CREATE
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/create`, user);
  }

  // 🔵 READ ALL
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }

  // 🔵 READ ONE
  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${email}`);
  }

  // 🟡 UPDATE
  updateUser(email: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/update/${email}`, user);
  }

  // 🔴 DELETE
  deleteUserByEmail(email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${email}`);
  }
}
