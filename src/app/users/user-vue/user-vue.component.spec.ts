import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVueComponent } from './user-vue.component';

describe('UserVueComponent', () => {
  let component: UserVueComponent;
  let fixture: ComponentFixture<UserVueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
