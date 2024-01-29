import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { depts } from 'src/assets/depts';
import { EventsService } from 'src/service/events/events.service';

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css'],
})
export class ModifyEventComponent implements OnInit {
  data: any = {};
  event_id: string | null = null;
  loading: boolean = true;
  updateForm!: FormGroup;
  depts: any = []
  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private formBuilder: FormBuilder
  ) {
    this.depts = depts
    this.event_id = route.snapshot.paramMap.get('event_id');
    eventService.getEventById(this.event_id).subscribe((val: any) => {
      this.data = { ...val.data };
    });
    setTimeout(() => {
      this.loading = false;
      this.updateForm = formBuilder.group({
        event_name: [this.data.event_name, [Validators.required]],
        dept_can_participate: [this.data.dept_can_participate, [Validators.required]],
        year_can_participate: [this.data.year_can_participate, [Validators.required]],
        venue: [this.data.venue, [Validators.required]],
        event_type: [this.data.event_type, [Validators.required]],
        amount: [this.data.amount],
        start_date: [this.getDate(this.data.start_date), [Validators.required]],
        end_date: [this.getDate(this.data.end_date), [Validators.required]],
        summary: [this.data.summary, [Validators.required]],
        graduation: [this.data.graduation, [Validators.required]],
        contact_number: [
          this.data.contact_number,
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        contact_email: [this.data.contact_email, [Validators.required]],
      });
      // console.log(this.data)
      // this.data = {...this.data}
    }, 500);
  }

  getDate(date: any) {
    const avlDate = new Date(date)
    // console.log(date)
    const day = avlDate.getDate();
    const month = ((avlDate.getMonth() + 1).toString().length === 1 ? '0' + (avlDate.getMonth() + 1) : (avlDate.getMonth() + 1))
    const year = avlDate.getFullYear()
    return `${year}-${month}-${day}`
  }

  ngOnInit() {
    // console.log(this.data)
  }

  updateFormSubmit() {
    console.log(this.updateForm.value)
  }

}
