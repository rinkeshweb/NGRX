import { Component, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { toSignal } from '@angular/core/rxjs-interop';
import { DecimalPipe } from '@angular/common';
import { selectCourses } from '../state/courses.selector';
import { appState } from 'src/app/core/store/app.state';
import { deleteCourse, openEditForm } from '../state/courses.actions';
import { Courses } from 'src/app/core/models/courses.model';

@Component({
  selector: 'app-courses-card',
  imports: [ButtonModule, DecimalPipe],
  templateUrl: './courses-card.html',
  styleUrl: './courses-card.css',
})
export class CoursesCard {
  private store = inject<Store<appState>>(Store);
  readonly coursesItems = toSignal(this.store.select(selectCourses), { initialValue: [] })

  editForm(course: Courses) {
    console.log('clicked edit', course);
    this.store.dispatch(openEditForm({ course }));
  }

  onDelate(courseId: number) {
    const onConfirm = confirm('Are you sure you want to delete this course?');
    if (onConfirm) {
      console.log('clicked delete', courseId);
      this.store.dispatch(deleteCourse({ id: courseId }))
    }
  }

}
