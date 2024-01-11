import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userTypeForm!: FormGroup
  privileges: any = [
    { value: 'admin', label: 'Admin' },
    { value: 'staff', label: 'Staff' },
    { value: 'std', label: 'Student' },
  ]
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userTypeForm = formBuilder.group({
      privilege: [null, [Validators.required]]
    })
  }

  get privilege() {
    return this.userTypeForm.get('privilege')
  }
}
