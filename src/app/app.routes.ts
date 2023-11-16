import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'people', pathMatch: 'full'},
    { path: 'people', component: PeopleListComponent },
];
