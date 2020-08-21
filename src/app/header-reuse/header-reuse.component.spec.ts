import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReuseComponent } from './header-reuse.component';

describe('HeaderReuseComponent', () => {
  let component: HeaderReuseComponent;
  let fixture: ComponentFixture<HeaderReuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
