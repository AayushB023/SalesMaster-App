import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/panel/Components/home/home.component';
import { ListComponent } from './modules/dashboard/Components/list/list.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { TeamServiceService } from '../services/team-service.service';
import { EditTeamComponent } from './modules/team/Components/edit-team/edit-team.component';
import { ShareDataService } from '../services/share-data.service';
import { FooterComponent } from './modules/dashboard/Components/footer/footer.component';
import { HeaderComponent } from './modules/dashboard/Components/header/header.component';

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
    NativeScriptModule,
    // HttpClientModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUIListViewModule,
    FormsModule,
    ReactiveFormsModule,
    NativeScriptRouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [TeamServiceService, ShareDataService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
