import { createAction, props } from '@ngrx/store';
import { Courses } from 'src/app/core/models/courses.model';

// export const showForm = createAction('showForm', props<{ value: boolean }>())
export const openAddForm = createAction('[courses] Open Add Form');
export const openEditForm = createAction('[courses] Open Edit Form', props<{ course: Courses }>());
export const closeForm = createAction('[courses] Close Form');

export const createCourses = createAction('[courses] Add New Courses', props<{ course: Courses }>())
export const updateCourse = createAction('[course] update Course', props<{ course: Courses }>())
export const deleteCourse = createAction('[course] Delete Slected Course', props<{ id: number}>())
