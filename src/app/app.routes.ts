import { Routes } from '@angular/router';
import { ListComponent } from './modules/dashboard/Components/list/list.component';
import { HomeComponent } from './modules/panel/Components/home/home.component';
import { EditTeamComponent } from './modules/team/Components/edit-team/edit-team.component';
import { HeaderComponent } from './modules/dashboard/Components/header/header.component';
import { AuthGuardService } from '../auth/authguard.service';
import { AuthDashService } from '../auth/auth-dash.service';


export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthDashService]},
  { path: 'list', component: ListComponent, canActivate: [AuthGuardService], children: [
    { path: 'editList/:id', component: EditTeamComponent, canActivate: [AuthGuardService]}
  ] },
  { path: 'head', component: HeaderComponent}
];
export const navigationableComponents = [
    HomeComponent,
    ListComponent,
    EditTeamComponent,
    HeaderComponent
];
