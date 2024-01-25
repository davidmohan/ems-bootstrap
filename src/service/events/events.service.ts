import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment  } from 'src/app/environment'


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {
    
   }

  // serverUrl: string = 'http://localhost:5000/ems'
  // serverUrl: string = 'http://ems-express.up.railway.app/ems'
  serverUrl: string = Environment.url
  root: string = `${this.serverUrl}/event`

  getAllEvents() {
    return this.http.get(`${this.root}/all`)
  }

  createEvent(data: any) {
    return this.http.post(`${this.root}/create`, data)
  }

  getEventById(id: string | null) {
    return this.http.get(`${this.root}/${id}`)
  }

  getAllEventsByStaff(staff_id: string) {
    return this.http.get(`${this.root}/f/staff/${staff_id}`)
  }

  getAllEventByYearAndDept(year: string, dept: string) {
    return this.http.get(`${this.root}/${year}/${dept}`)
  }

  updateEventStatus(event_id: string, value: string | number) {
    return this.http.put(`${this.root}/s/u/${event_id}`, { value: value })
  }

}
