import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    if (localStorage.getItem('token') != null) {
      router.navigateByUrl('/dash-board')
    } else {
      router.navigateByUrl('/auth')
    }
  }
}
