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
}
