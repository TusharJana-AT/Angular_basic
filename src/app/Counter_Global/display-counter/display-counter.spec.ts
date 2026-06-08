import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCOunter } from './display-counter';

describe('DisplayCOunter', () => {
  let component: DisplayCOunter;
  let fixture: ComponentFixture<DisplayCOunter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCOunter],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayCOunter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
