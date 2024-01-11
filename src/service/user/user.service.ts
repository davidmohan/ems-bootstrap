import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl: string = 'http://localhost:5000/ems'
  root: string = `${this.serverUrl}/user`
  user!: any
  constructor(private http: HttpClient) { }

  authUser(data: any) {
    return this.http.get(`${this.root}/auth/${data.email}/${data.password}`)
  }

  getUser(id: string | null) {
    return this.http.get(`${this.root}/${id}`)
  }

  setUser(userData: any) {
    this.user = {...userData}
  }

  getUserFromApp() {
    return this.user
  }

  getAllUsers() {
    return this.http.get(`${this.root}/all`)
  }
}
