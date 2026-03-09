import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { CoursesCard } from "./courses-card/courses-card";
import { Drawer, DrawerModule } from 'primeng/drawer';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectFormShow, selectSelectedCourse } from './state/courses.selector';
import { CoursesForm } from "./courses-form/courses-form";
import { closeForm, openAddForm } from './state/courses.actions';

@Component({
  selector: 'app-courses',
  imports: [InputGroupModule, InputTextModule, ButtonModule, FormsModule, CoursesCard, DrawerModule, CoursesForm],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  private store = inject<Store>(Store);
  readonly showForm = toSignal(this.store.select(selectFormShow), { initialValue: false });
  readonly selectedCourse = toSignal(this.store.select(selectSelectedCourse), { initialValue: null })
  searchCourses = signal(null);

  onSearch() {

  }

  openForm() {
    this.store.dispatch(openAddForm())
  }

  closeForm() {
    this.store.dispatch(closeForm())
  }

}
