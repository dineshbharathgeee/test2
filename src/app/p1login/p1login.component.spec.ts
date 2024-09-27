import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1loginComponent } from './p1login.component';

describe('P1loginComponent', () => {
  let component: P1loginComponent;
  let fixture: ComponentFixture<P1loginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1loginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
