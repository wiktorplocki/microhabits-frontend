import { Routes } from '@angular/router';
import { HabitsListComponent } from './features/habits/habits-list/habits-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'habits', component: HabitsListComponent },
];
