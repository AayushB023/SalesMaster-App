import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EditTeamComponent } from '../team/Components/edit-team/edit-team.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { routes } from '../../app.routes';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    NativeScriptCommonModule,
    HeaderComponent,
    FooterComponent,
    EditTeamComponent,
    NativeScriptRouterModule.forRoot(routes),
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
