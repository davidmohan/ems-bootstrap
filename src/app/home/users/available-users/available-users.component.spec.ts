import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailableUsersComponent } from './available-users.component';

describe('AvailablesComponent', () => {
  let component: AvailableUsersComponent;
  let fixture: ComponentFixture<AvailableUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableUsersComponent]
    });
    fixture = TestBed.createComponent(AvailableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
