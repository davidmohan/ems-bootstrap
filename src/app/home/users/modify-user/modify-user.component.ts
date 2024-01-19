import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/service/user/user.service';
import { UsersComponent } from '../users.component';


@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userSevice: UserService) { }

  userData: any = []

  ngOnInit(): void {
    const user_id = this.route.snapshot.paramMap.get('id')
    this.getUserForUpdate(user_id)
  }

  getUserForUpdate(user_id: string | null) {
    this.userSevice.getUserByRef(user_id).subscribe((val: any) => {
      if (val.response) {
        this.userSevice.getUserForUpdate(val.data.ref_id, val.data.privilege).subscribe((val: any) => {
          if (val.response) {
            this.userData = val.data
          }
        })
      }
    })
  }
}
