import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentFormComponent } from './new-student-form.component';

describe('NewStudentFormComponent', () => {
  let component: NewStudentFormComponent;
  let fixture: ComponentFixture<NewStudentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewStudentFormComponent]
    });
    fixture = TestBed.createComponent(NewStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
