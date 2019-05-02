import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../../../services/share-data.service';
import { Team } from '../../../../../TeamClass';
import { TeamServiceService } from '../../../../../services/team-service.service';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViewChild, ElementRef} from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  teams: Team[];
  id;
  team_name;
  amount;
  constructor (private fb: FormBuilder, private shareData: ShareDataService,
    private teamService: TeamServiceService, private router: ActivatedRoute, 
    private route: Router, private _page: Page) {
  }
  TeamForm = this.fb.group({
    team_id: this.router.snapshot.queryParamMap.get('team_id'),
    team_name: [this.router.snapshot.queryParamMap.get('teamName'), Validators.required],
    amount: [this.router.snapshot.queryParamMap.get('amount'), Validators.required]
});

  ngOnInit() {
    console.log('dgfhjkl');
    this._page.actionBarHidden = true; 
    this.teams = this.shareData.getOption();
    this.id = this.router.snapshot.queryParamMap.get('team_id');
    this.team_name = this.router.snapshot.queryParamMap.get('teamName');
    this.amount = this.router.snapshot.queryParamMap.get('amount');

    console.log(this.teams);
  }
  submit = function( teams) {
    if ( this.router.snapshot.queryParamMap.get('teamName')== '' && this.router.snapshot.queryParamMap.get('amount')== '') {
      console.log('jara h');
      this.teamService.addTeam(teams).subscribe(response => {
        // console.log(response);
        if(this.TeamForm.controls.team_name.valid && this.TeamForm.controls.amount.valid){
          let data = {team_name: this.TeamForm.controls.team_name.value, amount: this.TeamForm.controls.amount.value};
          console.log(data);
// tslint:disable-next-line: no-shadowed-variable
          this.teamService.addTeam(data).subscribe(response => {
            console.log(response);
            if (response && response.status === 401) { }
// tslint:disable-next-line: one-line
            else {
              alert('Team Successfully');
              location.reload();
              this.closeAddExpenseModal.nativeElement.click();
            }
          });
        }
      });
    }
    else {
   console.log('jra h');
  let id = this.router.snapshot.paramMap.get('id');
   console.log(id);
// tslint:disable-next-line: prefer-const
      let data = {
        team_id: this.TeamForm.get('team_id').value,
        team_name: this.TeamForm.get('team_name').value,
        amount: this.TeamForm.get('amount').value
      };
      console.log(data.team_name);
      this.teamService.updateTeam(data).subscribe(response => {
        console.log(response );
        if (response && response.status === 200) {
          console.log('H121');
          alert('Updated Successfully');
          location.reload();
          // this.route.navigate(['/list']);
          this.closeAddExpenseModal.nativeElement.click();
          this.teams[id].team_name = data.team_name;
          this.teams[id].amount = data.amount;
        }
      });
    // console.log(id, teams);
    }
  };

  delete = function() {
    console.log('jra h');
// tslint:disable-next-line: prefer-const
       let data = {
         team_id: this.id,
       };
       console.log(data.team_id);
       this.teamService.deleteTeam(data).subscribe(response => {
         console.log(response);
// tslint:disable-next-line: triple-equals
         if (response && response.status == 200) {
           console.log('H121');
          //  alert('Hello World');
           this.router.navigate(['/list']);
         }
       });
     // console.log(id, teams);
   };

}
