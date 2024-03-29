import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/app/environment';
import { UserService } from '../user/user.service';
import { StudentService } from '../student/student.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient, private stdService: StudentService) {
    
  }

 // serverUrl: string = 'http://localhost:5000/ems'
 // serverUrl: string = 'http://ems-express.up.railway.app/ems'
 serverUrl: string = Environment.url
 root: string = `${this.serverUrl}/registration`

 user: any = {}

  createRegistration(data: any) {
    return this.http.post(`${this.root}/create`, data)
  }

  getRegistrationByEventAndRegNo(event_id: string | null, reg_no: string) {
    return this.http.get(`${this.root}/${event_id}/${reg_no}`)
  }

  getAllRegistrationByEvent(event_id: string | null) {
    return this.http.get(`${this.root}/e/g/${event_id}`)
  }

  getRegistrationById(register_id: string | null) {
    return this.http.get(`${this.root}/${register_id}`)
  }

  getRegistrationCSV(event_id: string | null) {
    const headers = new HttpHeaders({ 'Content-Type': 'text/csv' });
    return this.http.get(`${this.root}/csv/generate/${event_id}`, { responseType: 'blob', headers: headers })
  }

}
