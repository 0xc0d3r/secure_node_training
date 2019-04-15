import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { FriendService } from '../friend/friend.service';
import { Friend } from '../friend/friend';

@Injectable()
export class PaymentFriendResolver implements Resolve<any> {
    constructor(
        private friendService: FriendService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Friend> {
        return this.friendService.getFriendById(route.params.id);
    }
}
