import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  getTeams(): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/get', { 'access_token': accessToken });
  }

  login(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'user/login', data);
  }

  logout(): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'user/logout', { 'access_token': accessToken });
  }

  // updateTeam(data): Observable<any> {
  //   let accessToken = localStorage.getItem('accessToken');
  //   return this.http.post<any>(environment.API_URL + 'teams/edit',
  //     Object.assign({ 'access_token': accessToken }, data));
  // }

  // deleteTeam(data): Observable<any> {
  //   let accessToken = localStorage.getItem('accessToken');
  //   return this.http.post<any>(environment.API_URL + 'teams/delete',
  //     Object.assign({ 'access_token': accessToken }, data));
  // }

  constructor(private http: HttpClient) {

  }
}
