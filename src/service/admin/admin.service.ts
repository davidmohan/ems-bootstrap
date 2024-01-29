import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/app/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl: string = Environment.url
  root: string = `${this.serverUrl}/admin`
  user!: any
  std!: any
  constructor(private http: HttpClient, private userService: UserService) {

  }
  getAdminById(id: string) {
    return this.http.get(`${this.root}/${id}`)
  }
}
