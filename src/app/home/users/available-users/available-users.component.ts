import { Component } from '@angular/core';
import { UserService } from 'src/service/user/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-available-users',
  templateUrl: './available-users.component.html',
  styleUrls: ['./available-users.component.css']
})
export class AvailableUsersComponent {

  // available

  constructor(private userService: UserService) {

  }

  toDeleteUser(): void {
    Swal.fire({
      title: "Deletion!",
      text: "Please confirm delete the user.!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "#a30000",
      showCloseButton: true,
      confirmButtonText: "Delete"
    })
  }
}
