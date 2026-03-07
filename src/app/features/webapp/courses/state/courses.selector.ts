import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.state";
import { COURSES_STATE } from "src/app/constants";

export const getCoursesState = createFeatureSelector<CoursesState>(COURSES_STATE);

export const selectCourses = createSelector(getCoursesState, s => s.courses);
export const selectFormShow = createSelector(getCoursesState, s => s.showCreateForm)
export const selectSelectedCourse = createSelector(getCoursesState, s => s.selectedCourse)
