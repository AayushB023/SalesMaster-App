import { Component, OnInit } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
import { SetupItemViewArgs } from 'nativescript-angular/directives';
import { registerElement} from 'nativescript-angular/element-registry';
import { PullToRefresh } from 'nativescript-pulltorefresh';
import { TeamServiceService } from '../../../../../services/team-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { ListViewEventData } from 'nativescript-ui-listview';
import { ShareDataService } from '../../../../../services/share-data.service';
import { Team } from '../../../../../TeamClass';

  // class Team {
  //   constructor (public id: Number, public name: string, public revenue: number){ }
  // }
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  teams: Team[];
  selected;
  teamArray: FormArray = this.fromBuilder.array([]);
  parentFormGroup: FormGroup = this.fromBuilder.group({
    teamArray: this.fromBuilder.array([])
  });

  constructor (private fromBuilder: FormBuilder, private teamService: TeamServiceService,
               private router: Router,private shareData: ShareDataService) {

                // shareData.setOption('team_name', JSON.stringify(this.teams.team_name));
                // shareData.setOption('amount', JSON.stringify(this.teams.amount));
                }

  getTeams() {
    this.teamService.getTeams().subscribe(response => {
      console.log(response);
      if (response && response.status === 200) {
        this.teams = response.data;
        
// tslint:disable-next-line: prefer-const
        // let teamArray = this.teams.map(team => this.fromBuilder.group({
        //   name: this.fromBuilder.control(team.team_name, [Validators.required]),
        //   amount: this.fromBuilder.control(team.amount, [Validators.required, Validators.pattern('[0-9]*')])
        // }));
        // this.teamArray = this.fromBuilder.array(teamArray);
        // this.parentFormGroup = this.fromBuilder.group({
        //   teamArray: this.teamArray
        // });
      } else if (response && response.status === 401) {
        this.logout();
      }

    });
  }
  ItemSelected(args) {
    console.log('Hi');
    this.selected = this.teams[args.index];
    this.shareData.setOption('team_name', JSON.stringify(this.selected));
    // item.selected = true;
    this.router.navigate(['/editList']);
}

  ngOnInit() {
    this.getTeams();
  }
  logout = function() {
    this.teamService.logout().subscribe(response => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/home']);
      });
    };

  addTeam() {
    this.router.navigate(['/addTeam']);
    }

}
