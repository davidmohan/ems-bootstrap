import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentService } from '../student/student.service';
import { Environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient, private stdService: StudentService) {
    
  }
 // serverUrl: string = 'http://localhost:5000/ems'
 // serverUrl: string = 'http://ems-express.up.railway.app/ems'
 serverUrl: string = Environment.url
 root: string = `${this.serverUrl}/feedback`
 user: any = {}

  getAllFeedbacks(event_id: string | null) {
    return this.http.get(`${this.root}/all/${event_id}`)
  }

  getFeedbackByEventAndReg(event_id: string | null, reg_no: string) {
    return this.http.get(`${this.root}/one/:event_id/:reg_no`)
  }

  createFeedback(data: any) {
    return this.http.post(`${this.root}/create`, data)
  }
 
}
