import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  serverUrl: string = 'http://localhost:5000/ems'
  root: string = `${this.serverUrl}/event`

  getAllEvents() {
    return this.http.get(`${this.root}/all`)
  }
}
