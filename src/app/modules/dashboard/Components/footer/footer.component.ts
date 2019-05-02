import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../../../../../services/team-service.service';
import { Team } from '../../../../../TeamClass';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  teams: Team[];
  selected;
  total: any=0;
  constructor(private teamService: TeamServiceService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(response => {
      // console.log(response);
      if (response && response.status === 200) {
        this.teams = response.data;
        for ( let i = 0; i < this.teams.length; i++) {
          this.total += this.teams[i].amount;
          }
          console.log(this.total);
      }

    });
  }

}
