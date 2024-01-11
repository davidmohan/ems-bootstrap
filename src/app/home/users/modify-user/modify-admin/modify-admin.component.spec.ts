import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAdminComponent } from './modify-admin.component';

describe('ModifyAdminComponent', () => {
  let component: ModifyAdminComponent;
  let fixture: ComponentFixture<ModifyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyAdminComponent]
    });
    fixture = TestBed.createComponent(ModifyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
