import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTripsIdComponent } from './home-trips-id.component';

describe('HomeTripsIdComponent', () => {
  let component: HomeTripsIdComponent;
  let fixture: ComponentFixture<HomeTripsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTripsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTripsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
