import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {
  @Input() user!: any
  @Output() closeNavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  closeNav() {
    this.closeNavEvent.emit(false)
  }
}
