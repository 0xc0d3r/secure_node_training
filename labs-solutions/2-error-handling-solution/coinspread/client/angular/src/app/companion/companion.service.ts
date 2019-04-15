import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Companion } from './companion';


@Injectable()
export class CompanionService {


  constructor(private http: HttpClient) { }

  public getCompanions(): Observable<Companion[]> {
    return this.http.get<Companion[]>(`${API_URL}/companion`);
  }
  public getCompanion(id): Observable<Companion> {
    return this.http.get<Companion>(`${API_URL}/companion/${id}`);
  }

}
