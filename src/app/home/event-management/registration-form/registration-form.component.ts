import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/service/events/events.service';
import { StudentService } from 'src/service/student/student.service';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  user: any = {}
  event: any = {}
  constructor(private stdService: StudentService, private eventService: EventsService, private route: ActivatedRoute) {
    stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.user = val.data
      }
    })
  }

  ngOnInit(): void {
    const event_id = this.route.snapshot.paramMap.get('id')
    this.eventService.getEventById(event_id).subscribe((val: any) => {
      if (val.reponse) {
        this.event = val.data
      }
    })
  }
}
