import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCasingExerciseComponent } from './title-casing-exercise.component';

describe('TitleCasingExerciseComponent', () => {
  let component: TitleCasingExerciseComponent;
  let fixture: ComponentFixture<TitleCasingExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCasingExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCasingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
