import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { depts } from 'src/assets/depts';
import { FeedbackService } from 'src/service/feedback/feedback.service';
import { StudentService } from 'src/service/student/student.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  user: any = {}
  constructor(private formBuilder: FormBuilder, private fbService: FeedbackService, private router: Router, private route: ActivatedRoute, private stdService: StudentService) {
    stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.user = val.data
      }
    })
  }
  
  applyBtn: boolean = true
  feedbackForm!: FormGroup
  data: any = {}
  ngOnInit(){
    const event_id = this.route.snapshot.paramMap.get('id')
    this.getApplyBtnValue(event_id)
    
    this.feedbackForm = this.formBuilder.group({
      ...this.data,
      hospitality: [null, [Validators.required]],
      guidence: [null, [Validators.required]],
      experience: [null, [Validators.required]],
      opinion: [null],
    })
  }

  getApplyBtnValue(event_id: string | null) {
    this.stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.fbService.getFeedbackByEventAndReg(event_id, val.data.reg_no).subscribe((next_val: any) => {
          this.applyBtn = next_val.found
        })
      }
    })
  }

  buildFeedbackData(data: any) {
    this.data = data
  } 

  getDepartment(value: string) {
    return depts.filter((dept: any) => dept.value === value)[0]
  }

  submitFeedbackForm() {
    console.log(this.feedbackForm.value)
  }
}
