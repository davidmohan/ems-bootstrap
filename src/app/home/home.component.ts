import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  NavClick: boolean = false
  user!: any
  constructor(private router: Router, private userService: UserService) {
    userService.getUser(localStorage.getItem('token')).subscribe((val: any) => {
      if (val.response) {
        userService.setUser(val.data)
        this.user = userService.getUserFromApp()
      }
    })
  }
  closeNav(navValue: boolean): void {
    this.NavClick = navValue;
  }
  openNav(): void {
    this.NavClick = true;
  }
  logout(): void {
    localStorage.clear()
    this.router.navigateByUrl('/auth')
  }
}
