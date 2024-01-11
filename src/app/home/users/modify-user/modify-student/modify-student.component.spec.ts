import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStudentComponent } from './modify-student.component';

describe('ModifyStudentComponent', () => {
  let component: ModifyStudentComponent;
  let fixture: ComponentFixture<ModifyStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyStudentComponent]
    });
    fixture = TestBed.createComponent(ModifyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
