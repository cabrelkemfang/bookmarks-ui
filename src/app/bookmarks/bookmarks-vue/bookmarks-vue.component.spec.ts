import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksVueComponent } from './bookmarks-vue.component';

describe('BookmarksVueComponent', () => {
  let component: BookmarksVueComponent;
  let fixture: ComponentFixture<BookmarksVueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksVueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
