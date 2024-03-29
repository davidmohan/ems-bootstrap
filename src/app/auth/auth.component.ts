import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {

    document.title = "EMS | AUTH"

    this.loginForm = formBuilder.group({
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9-\.]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]{2,4}$')]],
      password: [null, [Validators.required]]
    })
  }
  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }
  onLoginSubmit(): void {
    this.userService.authUser(this.loginForm.value).subscribe((val: any) => {
      if (val.response) {
        localStorage.setItem('token', val.ref_id)
        // console.log(val)
        this.router.navigateByUrl('/dash-board')
      } else {
        Swal.fire({
          title: "Logging!",
          text: "Logging Failed!",
          icon: "error",
        })
      }
    })
  }
}
