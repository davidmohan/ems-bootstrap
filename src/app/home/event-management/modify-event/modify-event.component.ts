import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css']
})
export class ModifyEventComponent {
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
}
