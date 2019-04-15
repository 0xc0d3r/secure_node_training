import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { WalletService } from '../wallet/wallet.service';
import { Wallet } from '../wallet/wallet';

@Injectable()
export class PaymentWalletsResolver implements Resolve<any> {
    constructor(
        private walletService: WalletService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Wallet[]> {
        return this.walletService.getWallets();
    }
}
