import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminService } from 'src/service/admin/admin.service';
import { StaffService } from 'src/service/staff/staff.service';
import { StudentService } from 'src/service/student/student.service';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileForm!: FormGroup
  profileData: any = {}
  loading: boolean = true
  constructor(private stdService: StudentService, private adminService: AdminService, private staffService: StaffService, private userService: UserService) {
    userService.getUser(localStorage.getItem('token')).subscribe((val: any) => {
      if (val.response) {
        if (val.data.privilege === 'std') {
          stdService.getStudentById(val.data.ref_id).subscribe((next_val: any) => {
            if (next_val.response) {
              this.profileData = next_val.data
            }
          })
        }
        if (val.data.privilege === 'staff') {
          staffService.getStaffById(val.data.ref_id).subscribe((next_val: any) => {
            if (next_val.response) {
              this.profileData = next_val.data
            }
          })
        }
        if (val.data.privilege === 'admin') {
          adminService.getAdminById(val.data.ref_id).subscribe((next_val: any) => {
            if (next_val.response) {
              this.profileData = next_val.data
            }
          })
        }
      }
    })
    setTimeout(() => {
      // console.log(this.profileData)
      this.loading = false
    }, 500)
  }

  ngOnInit(): void {
      
  }
}
