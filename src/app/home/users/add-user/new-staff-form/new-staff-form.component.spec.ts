import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStaffFormComponent } from './new-staff-form.component';

describe('NewStaffFormComponent', () => {
  let component: NewStaffFormComponent;
  let fixture: ComponentFixture<NewStaffFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewStaffFormComponent]
    });
    fixture = TestBed.createComponent(NewStaffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
