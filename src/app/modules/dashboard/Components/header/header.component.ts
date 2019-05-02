import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../../../../../services/team-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private getService: TeamServiceService, private router: Router) { }

  ngOnInit() {
  }
  logout = function() {
    this.getService.logout().subscribe(response => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/']);
    });
  }
  addTeam =function(id, team_name, amount) {
    this.router.navigate(['list/editList','null'], { queryParams: { teamName: '', amount: ''} });
  }

}
