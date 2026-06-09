import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormGroup } from './reactive-form-group';

describe('ReactiveFormGroup', () => {
  let component: ReactiveFormGroup;
  let fixture: ComponentFixture<ReactiveFormGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
