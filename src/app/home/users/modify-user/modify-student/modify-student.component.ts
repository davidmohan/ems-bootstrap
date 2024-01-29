import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    this.updatedUserData = this.formBuilder.group({ ... this.userData })
    // console.log(this.updatedUserData.value)
  }
  updateFormSubmit() { }
}
