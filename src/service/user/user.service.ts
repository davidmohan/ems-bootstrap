import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl: string = 'http://localhost:5000/ems'
  // serverUrl: string = 'http://ems-express.up.railway.app/ems'
  root: string = `${this.serverUrl}/`
  user!: any
  constructor(private http: HttpClient) { }

  authUser(data: any) {
    return this.http.get(`${this.root}/user/auth/${data.email}/${data.password}`)
  }

  getUser(id: string | null) {
    return this.http.get(`${this.root}/user/${id}`)
  }

  setUser(userData: any) {
    this.user = {...userData}
  }

  getUserFromApp() {
    return this.user
  }

  getAllUsers(user_type: string) {
    return this.http.get(`${this.root}/${user_type}/all`)
  }

  createStaffUser(data: any) {
    return this.http.post(`${this.root}/staff/create`, data)
  }
}
