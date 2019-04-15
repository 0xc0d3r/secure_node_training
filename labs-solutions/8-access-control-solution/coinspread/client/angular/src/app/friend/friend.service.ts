import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Friend } from './friend';
import { Companion } from '../companion/companion';
import { map } from 'rxjs/operators';

@Injectable()
export class FriendService {
  private friends$: Observable<Friend[]> = new BehaviorSubject<Friend[]>([]);

  getFriendById(id: string) {
    return this.friends$.pipe(
      map(friends => friends.find(friend => friend.id === id))
    );
  }

  constructor(private http: HttpClient) { }
  public getFriends(): Observable<Friend[]> {
    this.friends$ = this.http.get<Friend[]>(`${API_URL}/friend`);
    return this.friends$;
  }

  public addToFriends(data): Observable<Companion> {
    return this.http.post<Companion>(`${API_URL}/friend/${data.friendUserId}`, data);
  }
}
