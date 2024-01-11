import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  serverUrl: string = 'http://localhost:5000/ems'
  // serverUrl: string = 'http://ems-express.up.railway.app/ems'
  root: string = `${this.serverUrl}/event`

  getAllEvents() {
    return this.http.get(`${this.root}/all`)
  }
}
