import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import { TeamServiceService } from '../../../../../services/team-service.service';
// import * as localStorage from 'nativescript-localstorage';
// var Sqlite = require('nativescript-sqlite');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = 'app-name';

private database: any;
public people: Array<any>;

constructor (private fb: FormBuilder, private teamService: TeamServiceService, private router: Router) {
  // this.people = [];
  // (new Sqlite("my.db").then(db => {
  //   db.execSQL("Create Table (id INTEGER PRIMARY KEY AUTO")
  // }))
}

  signUpForm = this.fb.group({
    email: ['saral@jungleworks.com', Validators.required],
    password: ['123456', Validators.required]
});


  submit = function(data) {
// tslint:disable-next-line: no-shadowed-variable
      this.teamService.login(this.signUpForm.value).subscribe(data => {
        this.userdata = data;
        console.log(this.userdata);

// tslint:disable-next-line: triple-equals
        if (this.userdata && this.userdata.status == 200) {
          // console.log('Sorryif');
          // require( 'nativescript-localstorage' );
          localStorage.setItem('accessToken', data.body.access_token);
          this.router.navigate(['/list']);
        } else {
          console.log('Sorryelse');
        }
      });
    };

    ngOnInit() {
    }

  }

