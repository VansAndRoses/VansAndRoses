import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItinerationComponent } from './new-itineration.component';

describe('NewItinerationComponent', () => {
  let component: NewItinerationComponent;
  let fixture: ComponentFixture<NewItinerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItinerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItinerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
