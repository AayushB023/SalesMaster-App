import { Routes } from '@angular/router';
import { ListComponent } from './modules/dashboard/Components/list/list.component';
import { HomeComponent } from './modules/panel/Components/home/home.component';
import { EditTeamComponent } from './modules/team/Components/edit-team/edit-team.component';


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'editList', component: EditTeamComponent}
];
export const navigationableComponents = [
    HomeComponent,
    ListComponent,
    EditTeamComponent
];
