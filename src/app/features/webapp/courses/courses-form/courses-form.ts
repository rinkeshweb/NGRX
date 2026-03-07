import { closeForm, updateCourse } from './../state/courses.actions';
import { ChangeDetectorRef, Component, effect, inject, input, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Courses } from 'src/app/core/models/courses.model';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/core/store/app.state';
import { createCourses } from '../state/courses.actions';

@Component({
  selector: 'app-courses-form',
  imports: [ReactiveFormsModule, InputTextModule, TextareaModule, InputNumberModule, CheckboxModule, ButtonModule],
  templateUrl: './courses-form.html',
  styleUrl: './courses-form.css',
})
export class CoursesForm {
  readonly course = input<Courses | null>(null);
  private store = inject<Store<appState>>(Store)
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  courseForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    discription: ['', [Validators.required, Validators.minLength(10)]],
    image: ['', Validators.required],
    author: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    isPopular: [false]
  });

  patchEffect = effect(() => {
    const course = this.course();
    if (!course) return;
    untracked(() => {
      this.courseForm.patchValue(course, { emitEvent: false });
      console.log('edit', course)
    });
    this.cdr.detectChanges();
  });

  submit() {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }
    const formValue = this.courseForm.getRawValue();

    if (this.course()) {
      this.store.dispatch(updateCourse({
        course: {
          id: this.course()!.id,
          ...formValue
        }
      }))
    } else {
      this.store.dispatch(createCourses({
        course: {
          id: 0,
          ...formValue
        }
      }))
    }
    this.store.dispatch(closeForm())
    console.log(this.courseForm.getRawValue());
  }

}
