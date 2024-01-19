import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { depts } from 'src/assets/depts'

@Component({
  selector: 'app-modify-staff',
  templateUrl: './modify-staff.component.html',
  styleUrls: ['./modify-staff.component.css']
})
export class ModifyStaffComponent implements OnInit {
  @Input() userData: any = {}
  updatedUserData!: FormGroup
  depts: any = []
  constructor(private formBuilder: FormBuilder) {
    this.depts = depts
  }
  ngOnInit(): void {
    this.updatedUserData = this.formBuilder.group({ ... this.userData })
  }
  updateFormSubmit() { }
}
