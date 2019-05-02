import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ListComponent } from './Components/list/list.component';
import { EditTeamComponent } from '../team/Components/edit-team/edit-team.component';

@NgModule({
  declarations: [ ListComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    EditTeamComponent
  ]
})
export class DashboardModule { }
