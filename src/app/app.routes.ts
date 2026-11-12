
import { Routes } from '@angular/router';
import { Registration } from './component/registration/registration';
import { StudentList } from './component/student-list/student-list';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Registration },
  { path: 'student-list', component: StudentList }
];
