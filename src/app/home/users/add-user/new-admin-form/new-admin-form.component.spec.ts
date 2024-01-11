import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminFormComponent } from './new-admin-form.component';

describe('NewAdminFormComponent', () => {
  let component: NewAdminFormComponent;
  let fixture: ComponentFixture<NewAdminFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAdminFormComponent]
    });
    fixture = TestBed.createComponent(NewAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
