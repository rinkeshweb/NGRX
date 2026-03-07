import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCard } from './courses-card';

describe('CoursesCard', () => {
  let component: CoursesCard;
  let fixture: ComponentFixture<CoursesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
