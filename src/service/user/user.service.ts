import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/app/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // serverUrl: string = 'http://localhost:5000/ems'
  // serverUrl: string = 'http://ems-express.up.railway.app/ems'
  serverUrl: string = Environment.url
  root: string = `${this.serverUrl}`
  user!: any
  constructor(private http: HttpClient) { 
  }

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

  // createStaffUser(data: any) {
  //   return this.http.post(`${this.root}/staff/create`, data)
  // }

  // createAdminUser(data: any) {
  //   return this.http.post(`${this.root}/admin/create`, data)
  // }
  
  // createStudentUser(data: any) {
  //   return this.http.post(`${this.root}/std/create`, data)
  // }

  createUser(data: any, type: string) {
    return this.http.post(`${this.root}/${type}/create`, data)
  }

  deleteUser(id: string, type: string) {
    return this.http.delete(`${this.root}/${type}/${id}`)
  }
  
  getUserByRef(ref_id: string | null) {
    return this.http.get(`${this.root}/user/update/${ref_id}`)
  }

  getUserForUpdate(id: string, type: string) {
    return this.http.get(`${this.root}/${type}/${id}`)
  }
}
