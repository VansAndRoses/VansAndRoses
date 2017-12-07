import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyMessagesComponent } from './user-my-messages.component';

describe('UserMyMessagesComponent', () => {
  let component: UserMyMessagesComponent;
  let fixture: ComponentFixture<UserMyMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMyMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
