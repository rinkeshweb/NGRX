import { closeForm, createCourses, deleteCourse, openAddForm, openEditForm, updateCourse } from './courses.actions';
import { createReducer, on } from "@ngrx/store";
import { initialState } from "./courses.state";

export const coursesReducer = createReducer(
  initialState,
  on(openAddForm, (state) => {
    return {
      ...state,
      showCreateForm: true,
      selectedCourse: null
    }
  }),
  on(openEditForm, (state, { course }) => {
    return {
      ...state,
      showCreateForm: true,
      selectedCourse: course
    }
  }),
  on(closeForm, (state) => ({
    ...state,
    showCreateForm: false,
    selectedCourse: null
  })),
  on(createCourses, (state, { course }) => ({
    ...state,
    courses: [
      ...state.courses,
      { ...course, id: state.courses.length + 1 }
    ],
    showCreateForm: false,
    selectedCourse: null
  })),
  on(updateCourse, (state, { course }) => ({
    ...state,
    courses: state.courses.map(c =>
      c.id === course.id ? { ...course } : c
    ),
    showCreateForm: false,
    selectedCourse: null
  })),
  on(deleteCourse, (state, action) => ({
    ...state,
    courses: state.courses.filter(cor => cor.id !== action.id)
  }))
)
