import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { CompanionService } from '../companion/companion.service';
import { Companion } from '../companion/companion';

@Injectable()
export class AddFriendRouterResolver implements Resolve<Companion> {
    constructor(private companionService: CompanionService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Companion> {
        return this.companionService.getCompanion(route.params.id);
    }
}
