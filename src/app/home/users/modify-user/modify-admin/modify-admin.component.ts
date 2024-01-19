import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modify-admin',
  templateUrl: './modify-admin.component.html',
  styleUrls: ['./modify-admin.component.css']
})
export class ModifyAdminComponent {
  @Input() userData: any = {}
  updatedUserData!: FormGroup
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.updatedUserData = this.formBuilder.group({ ... this.userData })
    console.log(this.updatedUserData.value)
  }
  updateFormSubmit() { }
}
