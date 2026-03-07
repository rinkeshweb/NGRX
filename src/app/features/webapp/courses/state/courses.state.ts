import { Courses } from "src/app/core/models/courses.model";

export interface CoursesState {
  courses: Courses[],
  showCreateForm: boolean,
  selectedCourse: Courses | null
}

export const initialState: CoursesState = {
  courses: [
    {
      id: 1,
      title: 'Complete JavaScript Mastery',
      discription: 'Learn JavaScript from basics to advanced concepts with real projects.',
      image: '/images/javascript.webp',
      author: 'John Doe',
      price: 1999,
      isPopular: true
    },
    {
      id: 2,
      title: 'Angular 21 - Zero to Hero',
      discription: 'Build modern Angular applications using standalone components and signals.',
      image: '/images/angular.webp',
      author: 'Rinkesh Kumar',
      price: 2499,
      isPopular: true
    },
    {
      id: 3,
      title: 'HTML & CSS Fundamentals',
      discription: 'Understand core HTML5 and CSS3 concepts with responsive layouts.',
      image: '/images/html-css.webp',
      author: 'Jane Smith',
      price: 999,
      isPopular: false
    },
    {
      id: 4,
      title: 'TypeScript for Frontend Developers',
      discription: 'Master TypeScript to write scalable and maintainable frontend code.',
      image: '/images/typescript.webp',
      author: 'Alex Brown',
      price: 1799,
      isPopular: false
    },
    {
      id: 5,
      title: 'RxJS & NgRx in Practice',
      discription: 'Reactive programming in Angular with real-world RxJS and NgRx examples.',
      image: '/images/rxjs.webp',
      author: 'Emily Wilson',
      price: 2999,
      isPopular: true
    }
  ],
  showCreateForm: false,
  selectedCourse: null
}
