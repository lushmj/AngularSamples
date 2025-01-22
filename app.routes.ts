import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
// Components
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'productlist', component: ProdListComponent },
  { path: 'view-prod/:id', component: ProdDetailsComponent },
  { path: 'add-prod', component: AddProdComponent },
  { path: 'edit-prod/:id', component: EditProdComponent },
  { path: 'app-lifecycle', component: LifecycleComponent },
];
