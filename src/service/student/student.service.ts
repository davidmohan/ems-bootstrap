import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/app/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  serverUrl: string = Environment.url
  root: string = `${this.serverUrl}/std`
  user!: any
  std!: any
  constructor(private http: HttpClient, private userService: UserService) {

  }

  getStudent() {
    this.user = this.userService.getUserFromApp()
    return  this.http.get(`${this.root}/${this.user?.ref_id}`)
  }

  getStdFromApp() {
    return this.std
  }

  setStudent(data: any) {
    this.std = data
  }

  getStudentById(id: string) {
    return this.http.get(`${this.root}/${id}`)
  }

}

