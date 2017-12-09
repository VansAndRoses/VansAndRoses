import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItinerationComponent } from './home-itineration.component';

describe('HomeItinerationComponent', () => {
  let component: HomeItinerationComponent;
  let fixture: ComponentFixture<HomeItinerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeItinerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeItinerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
