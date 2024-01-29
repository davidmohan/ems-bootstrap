import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { depts } from 'src/assets/depts'

@Component({
  selector: 'app-new-staff-form',
  templateUrl: './new-staff-form.component.html',
  styleUrls: ['./new-staff-form.component.css']
})
export class NewStaffFormComponent implements OnInit {
  @Input() privilege: string = ""
  
  depts: any = []
  newStaffForm!: FormGroup
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    this.depts = depts
  }
  
  ngOnInit(): void {
    this.newStaffForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      dept: [null, [Validators.required]],
      password: [null, [Validators.required]],
      privilege: [this.privilege],
      gender: [null, [Validators.required]]
    })
  }

  onStaffCreationFormSubmit() {
    // console.log(this.newStaffForm.value)
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
        this.userService.createUser(this.newStaffForm.value, this.privilege).subscribe((val: any) => {
          if (val.response) {
            Swal.fire({
              title: "Success!",
              text: "User created!",
              icon: "success",
            })
            this.router.navigateByUrl('users')
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
