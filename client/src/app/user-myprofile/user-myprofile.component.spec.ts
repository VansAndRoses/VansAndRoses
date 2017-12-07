import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyprofileComponent } from './user-myprofile.component';

describe('UserMyprofileComponent', () => {
  let component: UserMyprofileComponent;
  let fixture: ComponentFixture<UserMyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
