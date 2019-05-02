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
import { View } from 'tns-core-modules/ui/core/view';
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
  teama: any = [];
  selected;
  id;
  index;
  veri;
  teamArray: FormArray = this.fromBuilder.array([]);
  parentFormGroup: FormGroup = this.fromBuilder.group({
    teamArray: this.fromBuilder.array([])
  });

  constructor (private fromBuilder: FormBuilder, private teamService: TeamServiceService,
               private router: Router, private shareData: ShareDataService) {

                // shareData.setOption('team_name', JSON.stringify(this.teams.team_name));
                // shareData.setOption('amount', JSON.stringify(this.teams.amount));
                }
  modalview = function(id, team_name, amount, team_id) {
    this.router.navigate(['list/editList',id], { queryParams: { teamName: team_name, amount: amount, team_id: team_id } });
  }

  getTeams() {
    this.teamService.getTeams().subscribe(response => {
      console.log(response);
      if (response && response.status === 200) {
        this.teams = response.data;
      } else if (response && response.status === 401) {
        this.logout();
      }

    });
  }
  ItemSelected(args) {
    console.log('Hello');
    this.selected = this.teams[args.index];
    this.index = args.index;
    this.shareData.setOption('team_name', JSON.stringify(this.selected));
    console.log(this.index);
    // item.selected = true;
    this.router.navigate(['/list/editList' , this.index], { queryParams:
      { teamName: this.selected.team_name, amount: this.selected.amount, team_id:this.selected.team_id } });
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
    this.router.navigate(['/editList']);
    }

  openModal = function() {
    this.router.navigate(['/editList']);
  };

  public onCellSwiping(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const currentItemView = args.object;
    if (args.data.x < -200) {
    console.log('Notify perform right action');
    }
    }
    public onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args['object'];
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = rightItem.getMeasuredWidth() ; // 2;
    }
    public onSwipeCellFinished(args: ListViewEventData) {
    }
    public onRightSwipeClick(args) {
    console.log('Right swipe click');
// tslint:disable-next-line: prefer-const
    let dataa = {
    team_id : this.teams[this.teams.indexOf(args.object.bindingContext)].team_id
    };
    console.log(dataa.team_id);
    this.teamService.deleteTeam(dataa).subscribe(response => {
      console.log(response);
// tslint:disable-next-line: triple-equals
      if (response && response.status == 200) {
        console.log('H121');
        this.getTeams();
      }
    });
    }
//   get footerTitle(): string {
//     return this.get("_footerTitle");
// }
delete = function(id) {
  console.log('jra h');
// tslint:disable-next-line: prefer-const
     let dataa = {
       team_id: id,
     };
     console.log(dataa.team_id);
     this.teamService.deleteTeam(dataa).subscribe(response => {
       console.log(response);
// tslint:disable-next-line: triple-equals
       if (response && response.status == 200) {
         console.log('H121');
        //  alert('Hello World');
        //  this.router.navigate(['/list']);
        this.getTeams();
       }
     });
   // console.log(id, teams);
 };

}
