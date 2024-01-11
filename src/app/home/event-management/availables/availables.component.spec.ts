import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablesComponent } from './availables.component';

describe('AvailablesComponent', () => {
  let component: AvailablesComponent;
  let fixture: ComponentFixture<AvailablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailablesComponent]
    });
    fixture = TestBed.createComponent(AvailablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
