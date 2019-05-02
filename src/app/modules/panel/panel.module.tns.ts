import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './Components/home/home.component';
import { EditTeamComponent } from '../team/Components/edit-team/edit-team.component';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    EditTeamComponent,
    HomeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PanelModule { }
