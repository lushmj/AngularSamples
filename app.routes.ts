import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'registration', component: RegistrationComponent },
];
