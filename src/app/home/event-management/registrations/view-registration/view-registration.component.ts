import { CompilerConfig } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from 'src/service/registration/registration.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit{
  constructor(private route: ActivatedRoute, private regService: RegistrationService) {
  }
  registrationData: any = {}
  register_id: string | null = ""
  ngOnInit(): void {
    this.register_id = this.route.snapshot.paramMap.get('register_id')
    this.getRegistrationData(this.register_id)
  }

  getRegistrationData(register_id: string | null) {
    this.regService.getRegistrationById(register_id).subscribe((val: any) => {
      if (val.response) {
        this.registrationData = val.data
      }
    })
  }
}
