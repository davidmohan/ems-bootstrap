import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { depts } from 'src/assets/depts'

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.css']
})
export class ModifyStudentComponent {
  @Input() userData: any = {}
  updatedUserData!: FormGroup
  depts: any = []
  constructor(private formBuilder: FormBuilder) {
    this.depts = depts
  }
  ngOnInit(): void {
    this.updatedUserData = this.formBuilder.group({
      first_name: [this.userData.first_name, [Validators.required]],
      last_name: [this.userData.last_name, [Validators.required]],
      dept: [this.userData.dept, [Validators.required]],
      year_of_study: [this.userData.year_of_study, [Validators.required]],
      email: [this.userData.email, [Validators.required]],
      gender: [this.userData.gender, [Validators.required]],
      graduation: [this.userData.graduation, [Validators.required]],
      reg_no: [this.userData.reg_no, [Validators.required]]
    })
    // console.log(this.updatedUserData.value)
  }
  updateFormSubmit() { }
}
