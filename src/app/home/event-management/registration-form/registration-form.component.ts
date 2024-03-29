import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/service/events/events.service';
import { RegistrationService } from 'src/service/registration/registration.service';
import { StudentService } from 'src/service/student/student.service';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  user: any = {}
  event: any = {}
  constructor(
    private stdService: StudentService, 
    private eventService: EventsService,
    private route: ActivatedRoute,
    private regService: RegistrationService,
    private router: Router
    ) {
    stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.user = val.data
      }
    })
  }

  applyBtn: boolean = true

  ngOnInit(): void {
    const event_id = this.route.snapshot.paramMap.get('id')
    this.eventService.getEventById(event_id).subscribe((val: any) => {
      if (val.response) {
        this.event = val.data
      }
    })
    this.getApplyBtnValue(event_id)
  }

  getApplyBtnValue(event_id: string | null) {
    // let found = false
    this.stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.regService.getRegistrationByEventAndRegNo(event_id, val.data.reg_no).subscribe((next_val: any) => {
          // found = next_val.found
          // console.log(found)
          this.applyBtn = next_val.found
        })
      }
    })
    // return found
  }

  buildRegistrationData(): Object {
    return {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      email: this.user.email,
      reg_no: this.user.reg_no,
      dept: this.user.dept,
      year_of_study: this.user.year_of_study,
      event_id: this.event._id,
    }
  }

  getDateToDisplay(date: string) {
    const avlDate = new Date(date)
    return (`${avlDate.getDate()}/${avlDate.getMonth() + 1}/${avlDate.getFullYear()}`)
  }

  eventRegistration() {
    const registrationData = this.buildRegistrationData()
    Swal.fire({
      title: "Registration!",
      text: "Please confirm your registration!",
      icon: "info",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#00B2FF",
      confirmButtonText: "Confirm",
      cancelButtonColor: "Cancel"
    }).then((res: any) => {
      if (res.isConfirmed) {
        this.regService.createRegistration(registrationData).subscribe((val: any) => {
          (val.response) ? (
            Swal.fire({
              title: "Success!",
              text: "Please present the event On-Time!",
              icon: "success",
            }).then(() => {
              this.router.navigateByUrl("event-management")
            })
            ) : (
              Swal.fire({
                title: "Failed!",
                text: "Registration is not counted!",
                icon: "error",
              }).then(() => {
                this.router.navigateByUrl("event-management")
            })
          )
        })
      }
    })
  }
}
