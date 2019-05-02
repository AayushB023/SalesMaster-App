import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTeamComponent } from './Components/edit-team/edit-team.component';
import { TeamServiceService } from '../../../services/team-service.service';
import { ShareDataService } from '../../../services/share-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ EditTeamComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ EditTeamComponent],
  providers: [ TeamServiceService, ShareDataService]
})
export class TeamModule { }
