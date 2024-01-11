import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  constructor(private router: Router) {}
  event_types: any = [
    { id: "payment" },
    { id: 'free' },
  ]
  graduations: any = [
    { id: 'ug' },
    { id: 'pg' },
  ]
  years: any = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]
  ug_depts: any = [
    'bca',
    'bsc_cs_r',
    'bsc_cs_sf',
    'bsc_maths',
    'bba',
    'ba_tamil',
    'ba_english',
    'bcom',
    'bcom_ca',
    'ba_history',
    'phs_sf',
    'phs_r',
  ]
  pg_depts: any = [
    'mca',
    'msc_cs',
    'msc_maths',
    'mcom',
    'ma_tamil',
    'ma_english',
    'mcom_ca',
    'ma_history',
  ]
  moveToAvailables(): void {
    Swal.fire({
      title: "Submission!",
      text: "Please confirm your event creation.!",
      icon: "info",
      denyButtonText: "Cancel",
      showDenyButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#00B2FF",
      closeButtonHtml: "&times",
      showCloseButton: true
    })
  }
}
