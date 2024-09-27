import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3navbarComponent } from './p3navbar.component';

describe('P3navbarComponent', () => {
  let component: P3navbarComponent;
  let fixture: ComponentFixture<P3navbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P3navbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3navbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
