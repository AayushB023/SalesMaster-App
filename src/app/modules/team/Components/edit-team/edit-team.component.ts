import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../../services/share-data.service';
import { Team } from '../../../../../TeamClass';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  teams: any=[];
  team_name: string;
  amount: string;
  constructor(shareData: ShareDataService) {
    this.teams = shareData.getOption();
    this.team_name = JSON.parse(this.teams).team_name;
    this.amount = JSON.parse(this.teams).amount;
  }

  ngOnInit() {
  }

}
