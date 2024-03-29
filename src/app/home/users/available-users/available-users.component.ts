import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-available-users',
  templateUrl: './available-users.component.html',
  styleUrls: ['./available-users.component.css']
})
export class AvailableUsersComponent {

  // available

  availableUsers: any = []

  userTypeForm!: FormGroup
  privileges: any = [
    { value: 'admin', label: 'Admin' },
    { value: 'staff', label: 'Staff' },
    { value: 'std', label: 'Student' },
  ]

  user: any = {}

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.userTypeForm = formBuilder.group({
      user_type: [null, [Validators.required]]
    })
    this.user = userService.getUserFromApp()
  }

  get user_type() {
    return this.userTypeForm.get('user_type')
  }

  onUserTypeChange() {
    if (this.user_type?.value === null) {
      this.availableUsers = []
      return
    }
    this.userService.getAllUsers(this.user_type?.value).subscribe((val: any) => {
      if (val.response) {
        this.availableUsers = val.data
      }
    })
  }

  toDeleteUser(user_id: string): void {
    Swal.fire({
      title: "Deletion!",
      text: "Please confirm delete the user.!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "#a30000",
      showCloseButton: true,
      confirmButtonText: "Delete"
    }).then((res: any) => {
      if (res.isConfirmed) {
        this.userService.deleteUser(user_id, this.user_type?.value).subscribe((val: any) => {
          console.log(val.response)
          if (val.response) {
            Swal.fire({
              title: "Success!",
              text: "User Deleted!",
              icon: "success",
            })
            this.onUserTypeChange()
            return
          } else {
            Swal.fire({
              title: "Failed!",
              text: "User Doesn't Deleted!",
              icon: "error",
            })
          }
        })
      }
    })
  }
}
