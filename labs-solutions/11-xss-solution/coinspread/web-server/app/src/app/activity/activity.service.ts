import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Activity } from './activity';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient) { }

  public getActivitys(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${API_URL}/activity`);
  }

}
