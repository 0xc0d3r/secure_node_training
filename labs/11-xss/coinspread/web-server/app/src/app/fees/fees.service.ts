import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Fees } from './fees';

@Injectable()
export class FeesService {

  constructor(private http: HttpClient) { }

  public getFees(): Observable<Fees> {
    return this.http.get<Fees>(`${API_URL}/fees`);
  }

  public saveFees(data): Observable<Fees> {
    return this.http.put<Fees>(`${API_URL}/fees`, data);
  }

}
