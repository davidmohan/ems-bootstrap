import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-admin-form',
  templateUrl: './new-admin-form.component.html',
  styleUrls: ['./new-admin-form.component.css']
})
export class NewAdminFormComponent {
  @Input() privilege!: string
}
