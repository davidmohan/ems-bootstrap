import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { depts } from 'src/assets/depts';
import { FeedbackService } from 'src/service/feedback/feedback.service';
import { StudentService } from 'src/service/student/student.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  user: any = {}
  loading: boolean = true;
  constructor(private formBuilder: FormBuilder, private fbService: FeedbackService, private router: Router, private route: ActivatedRoute, private stdService: StudentService) {
    stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.user = val.data
        this.buildFeedbackData(val.data)
      }
      this.loading = false;
    })
  }
  
  applyBtn: boolean = true
  feedbackForm!: FormGroup
  data: any = {}
  ngOnInit(){
    const event_id = this.route.snapshot.paramMap.get('id')
    this.getApplyBtnValue(event_id)
    
    this.feedbackForm = this.formBuilder.group({
      hospitality: [null, [Validators.required]],
      guidence: [null, [Validators.required]],
      experience: [null, [Validators.required]],
      opinion: [null],
      event_id: event_id,
      feedback: true
    })
  }

  getApplyBtnValue(event_id: string | null) {
    this.stdService.getStudent().subscribe((val: any) => {
      if (val.response) {
        this.fbService.getFeedbackByEventAndReg(event_id, val.data.reg_no).subscribe((next_val: any) => {
          this.applyBtn = next_val.found
        })
        console.log(this.applyBtn);
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
    let feedbackData = {
      ...this.feedbackForm.value,
        first_name: this.data.first_name,
        last_name: this.data.last_name,
        dept: this.data.dept,
        reg_no: this.data.reg_no,
        year_of_study: this.data.year_of_study,
        email: this.data.email,
    }
    console.log(feedbackData)

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
        this.fbService.createFeedback(feedbackData).subscribe((val: any) => {
          (val.response) ? (
            Swal.fire({
              title: "Success!",
              text: "Feedback Submitted",
              icon: "success",
            }).then(() => {
              this.router.navigateByUrl('event-management')
            })
          ) : (
            Swal.fire({
              title: "Failed!",
              text: "Feedback is not counted!",
              icon: "error",
            }).then(() => {
              this.router.navigateByUrl('event-management')
            })
          )
        })
      }
    })

  }
}
