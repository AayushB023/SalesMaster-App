import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/panel/Components/home/home.component';
import { ListComponent } from './modules/dashboard/Components/list/list.component';
import { TeamServiceService } from '../services/team-service.service';
import { EditTeamComponent } from './modules/team/Components/edit-team/edit-team.component';
import { ShareDataService } from '../services/share-data.service';
import { FooterComponent } from './modules/dashboard/Components/footer/footer.component';
import { HeaderComponent } from './modules/dashboard/Components/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import 'nativescript-localstorage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    EditTeamComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TeamServiceService, ShareDataService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
