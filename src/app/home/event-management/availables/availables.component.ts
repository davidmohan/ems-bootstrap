import { Component } from '@angular/core';
import { EventsService } from 'src/service/events/events.service';
import { RegistrationService } from 'src/service/registration/registration.service';
import { StudentService } from 'src/service/student/student.service';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-availables',
  templateUrl: './availables.component.html',
  styleUrls: ['./availables.component.css']
})
export class AvailablesComponent {
  user!: any
  availableEvents: any = []
  constructor(private userService: UserService, private eventService: EventsService, private regService: RegistrationService, private stdService: StudentService) {
    this.user = userService.getUserFromApp()
    // console.log(this.user)
    this.getAvlEvents()
  }

  getAvlEvents() {
    if (this.user.privilege === 'std') {
      this.getAllAvailableEventsForStd()
    } else if (this.user.privilege === 'staff') {
      this.getAllAvailableEventsForStaff()
      // console.log(this.user.privilege)
    } else {
      this.getAllAvailableEvents()
    }
  }

  getAllAvailableEvents(): void {
    this.eventService.getAllEvents().subscribe((events: any) => {
      // this.regService
      if (events.response) {
        this.availableEvents = events.data
        // console.log(this.availableEvents)
      }
    })
  }

  getAllAvailableEventsForStd() {
    this.stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.eventService.getAllEventByYearAndDept(val.data.year_of_study, val.data.dept).subscribe((next_val: any) => {
          // console.log(next_val.data)
          if (next_val.response) {
            this.availableEvents = next_val.data.filter((event: any) => event.status === true)
          }
        })
      }
    })
  }

  eventStatusChange(event_id: string, event: any) {
    this.eventService.updateEventStatus(event_id, event.target.checked).subscribe((val: any) => {
      if (val.response) {
        this.getAvlEvents()
      }
    })
  }

  getAllAvailableEventsForStaff() {
    this.eventService.getAllEventsByStaff(this.user._id).subscribe((val: any) => {
      if (val.response) {
        this.availableEvents = val.data
      }
    })
  }

  deleteTheEvent(): void {
    Swal.fire({
      title: "Deletion!",
      text: "Please confirm your event deletion.!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "#a30000",
      confirmButtonText: "Delete"
    })
  }
  getDateToDisplay(date: string) {
    const avlDate = new Date(date)
    return (`${avlDate.getDate()}/${avlDate.getMonth() + 1}/${avlDate.getFullYear()}`)
  }

  getDepartments(depts: any) {
    let value = ""
    depts.forEach((dept: string) => {
      value +=  dept.toUpperCase() + " | "
    })
    value = value.substring(0, value.length - 2)
    return value
  }

  modifyEvents(): void {
    alert("Action is Developing Phase")
  }

}
