import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-new-admin-form',
  templateUrl: './new-admin-form.component.html',
  styleUrls: ['./new-admin-form.component.css'],
})
export class NewAdminFormComponent implements OnInit {
  @Input() privilege: string = '';

  newAdminForm!: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newAdminForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      privilege: [this.privilege],
    })
  }

  onAdminCreationFormSubmit() {
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
        this.userService.createAdminUser(this.newAdminForm.value).subscribe((val: any) => {
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
