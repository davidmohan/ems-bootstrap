import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/service/events/events.service';
import { StudentService } from 'src/service/student/student.service';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  user: any = {}
  events: any = []
  constructor(private eventService: EventsService, private userService: UserService, private stdService: StudentService) {
    this.user = userService.getUserFromApp()
  }
  ngOnInit(): void {
    if (this.user.privilege === 'std') {
      // document.title = "EMS | " + this.user.privilege
      this.stdService.getStudent().subscribe((val: any) => {
        if (val.response) {
          this.eventService.getAllEventByYearAndDept(val.data.year_of_study, val.data.dept).subscribe((next_val: any) => {
            if (next_val.response) {
              this.events = next_val.data.filter((event: any) => event.status === true)
              // console.log(this.events)
            }
          })
        }
      })
    }
  }
}
