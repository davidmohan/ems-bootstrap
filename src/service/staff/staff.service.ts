import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/app/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  serverUrl: string = Environment.url
  root: string = `${this.serverUrl}/staff`
  user!: any
  std!: any
  constructor(private http: HttpClient, private userService: UserService) {

  }
  getStaffById(id: string) {
    return this.http.get(`${this.root}/${id}`)
  }
}
