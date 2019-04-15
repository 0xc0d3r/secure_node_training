import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Wallet } from './wallet';

@Injectable()
export class WalletService {

  constructor(private http: HttpClient) { }

  public getWallets(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${API_URL}/wallet`);
  }

  public addWallet(data): Observable<Wallet> {
    return this.http.post<Wallet>(`${API_URL}/wallet`, data);
  }

}
