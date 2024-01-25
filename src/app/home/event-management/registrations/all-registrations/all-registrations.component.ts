import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from 'src/service/registration/registration.service';

@Component({
  selector: 'app-all-registrations',
  templateUrl: './all-registrations.component.html',
  styleUrls: ['./all-registrations.component.css']
})
export class AllRegistrationsComponent {
  avlRegistrations: any = []
  event_id: string | null
  constructor(private regService: RegistrationService, private route: ActivatedRoute) {
    this.event_id = this.route.snapshot.paramMap.get('event_id')
    this.getAllRegistrations()
  }
  
  getAllRegistrations() {
    this.regService.getAllRegistrationByEvent(this.event_id).subscribe((val: any) => {
      if(val.response) {
        this.avlRegistrations = val.data
      }
    })
  }
}
