import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
  @Input() privilege: string = ""

  newStudentForm!: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newStudentForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      reg_no: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      graduation: [null, [Validators.required]],
      dept: [null, [Validators.required]],
      year_of_study: [null, [Validators.required]],
      password: [null, [Validators.required]],
      privilege: [this.privilege]
    })
  }

  onStudentCreationFromSubmit() {
    Swal.fire({
      title: "Submission!",
      text: "Confirm User Creation!",
      icon: "info",
      confirmButtonText: "Create",
      confirmButtonColor: "#039c10",
      cancelButtonText: "Cancel",
      showCancelButton: true
    }).then((res: any) => {
      console.log(res)
      if (res.isConfirmed) {
        this.userService.createStudentUser(this.newStudentForm.value).subscribe((val: any) => {
          if (val.response) {
            Swal.fire({
              title: "Success!",
              text: "User created!",
              icon: "success",
            })
            return
          } else {
            Swal.fire({
              title: "Failed!",
              text: "Backend Doesn't Response!",
              icon: "error",
            })
          }
        })
      }
    })
  }

}
