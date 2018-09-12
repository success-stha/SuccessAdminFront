import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodCountComponent } from './view-blood-count.component';

describe('ViewBloodCountComponent', () => {
  let component: ViewBloodCountComponent;
  let fixture: ComponentFixture<ViewBloodCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBloodCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBloodCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
