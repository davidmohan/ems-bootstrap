import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegistrationsComponent } from './all-registrations.component';

describe('AllRegistrationsComponent', () => {
  let component: AllRegistrationsComponent;
  let fixture: ComponentFixture<AllRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRegistrationsComponent]
    });
    fixture = TestBed.createComponent(AllRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
