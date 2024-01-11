import { Component } from '@angular/core';
import { EventsService } from 'src/service/events/events.service';
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
  constructor(private userService: UserService, private eventService: EventsService) {
    this.user = userService.getUserFromApp()
    this.getAllAvailableEvents()
  }
  getAllAvailableEvents(): void {
    this.eventService.getAllEvents().subscribe((val: any) => {
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
}
