import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButton } from './counter-button';

describe('CounterButton', () => {
  let component: CounterButton;
  let fixture: ComponentFixture<CounterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
