import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2homeComponent } from './p2home.component';

describe('P2homeComponent', () => {
  let component: P2homeComponent;
  let fixture: ComponentFixture<P2homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2homeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
