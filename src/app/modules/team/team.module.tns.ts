import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EditTeamComponent } from './Components/edit-team/edit-team.component';

@NgModule({
  declarations: [EditTeamComponent ],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [ EditTeamComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TeamModule { }
