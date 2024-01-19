import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.css']
})
export class PdfUploadComponent {
  brochureForm!: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.brochureForm = formBuilder.group({
      name: [null],
      ref_id: [null]
    })
  }
  image: any
  formData:FormData = new FormData()
  getFile(target: any) {
    const file = target.files[0];
    // const file = (target as HTMLInputElement).files[0];
    this.formData.append('file', file)
    this.image = URL.createObjectURL(file)
    window.open(URL.createObjectURL(file))
  }
  onSubmit() {
    // window.open(, '_blank')
  }
}
