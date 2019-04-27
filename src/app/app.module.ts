import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/panel/Components/home/home.component';
import { ListComponent } from './modules/dashboard/Components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamServiceService } from '../services/team-service.service';
import { EditTeamComponent } from './modules/team/Components/edit-team/edit-team.component';
import { ShareDataService } from '../services/share-data.service';
// import 'nativescript-localstorage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    EditTeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TeamServiceService, ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
