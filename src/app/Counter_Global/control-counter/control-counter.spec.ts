import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCOunter } from './control-counter';

describe('ControlCOunter', () => {
  let component: ControlCOunter;
  let fixture: ComponentFixture<ControlCOunter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCOunter],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlCOunter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
