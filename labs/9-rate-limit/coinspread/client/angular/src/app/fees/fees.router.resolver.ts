import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { FeesService } from './fees.service';
import { Fees } from './fees';

@Injectable()
export class FeesRouterResolver implements Resolve<Fees> {
    constructor(private feesService: FeesService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Fees> {
        return this.feesService.getFees();
    }
}
