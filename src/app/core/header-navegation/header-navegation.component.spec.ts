import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavegationComponent } from './header-navegation.component';

describe('HeaderNavegationComponent', () => {
  let component: HeaderNavegationComponent;
  let fixture: ComponentFixture<HeaderNavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavegationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
