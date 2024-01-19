import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { depts } from 'src/assets/depts'
import { formatDate } from '@angular/common';
import { EventsService } from 'src/service/events/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  newEventForm!: FormGroup
  depts: any = []
  constructor(private router: Router, private formBuilder: FormBuilder, private eventService: EventsService) {
    this.depts = depts
  }
  ngOnInit(): void {
    this.newEventForm = this.formBuilder.group({
      event_name: [null, [Validators.required]],
      dept_can_participate: [null, [Validators.required]],
      year_can_participate: [null, [Validators.required]],
      venue: [null, [Validators.required]],
      event_type: [null, [Validators.required]],
      amount: [0],
      start_date: [null, [Validators.required]],
      end_date: [null, [Validators.required]],
      summary: [null, [Validators.required]],
      ref_id: [localStorage.getItem('token')],
      status: [false],
      graduation: [null, [Validators.required]]
    })
  }
  createEvent(): void {
    Swal.fire({
      title: "Creation!",
      text: "Confirmation for new event creation!",
      confirmButtonText: "Create",
      showConfirmButton: true,
      confirmButtonColor: "#00B2FF",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      icon: "info"
    }).then((res: any) => {
      if (res.isConfirmed) {
        this.eventService.createEvent(this.newEventForm.value).subscribe((val: any) => {
          (val.response) ? (Swal.fire({
            title: "Success!",
            text: "Event is successfully created!",
            icon: 'success'
          })) : (Swal.fire({
            title: "Failed!",
            text: "Event creation failed!",
            icon: "error"
          }))
        })
      }
    })
  }
}
