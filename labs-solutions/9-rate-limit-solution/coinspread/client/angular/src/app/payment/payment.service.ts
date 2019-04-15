import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Payment } from './payment';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient) { }

  public pay(data): Observable<Payment> {
    return this.http.post<Payment>(`${API_URL}/payment/${data.friendUserId}`, data);
  }
}
