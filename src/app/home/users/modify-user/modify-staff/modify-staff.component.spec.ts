import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStaffComponent } from './modify-staff.component';

describe('ModifyStaffComponent', () => {
  let component: ModifyStaffComponent;
  let fixture: ComponentFixture<ModifyStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyStaffComponent]
    });
    fixture = TestBed.createComponent(ModifyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
