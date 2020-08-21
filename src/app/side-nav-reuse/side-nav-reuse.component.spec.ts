import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavReuseComponent } from './side-nav-reuse.component';

describe('SideNavReuseComponent', () => {
  let component: SideNavReuseComponent;
  let fixture: ComponentFixture<SideNavReuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavReuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
