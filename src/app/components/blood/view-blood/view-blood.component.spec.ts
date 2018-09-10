import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodComponent } from './view-blood.component';

describe('ViewBloodComponent', () => {
  let component: ViewBloodComponent;
  let fixture: ComponentFixture<ViewBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
