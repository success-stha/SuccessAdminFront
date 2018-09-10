import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBloodAddComponent } from './admin-blood-add.component';

describe('AdminBloodAddComponent', () => {
  let component: AdminBloodAddComponent;
  let fixture: ComponentFixture<AdminBloodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBloodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBloodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
