import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from '../wallet/wallet.service';
import { Wallet } from '../wallet/wallet';
import { Location } from '@angular/common';

export interface Currency {
  name: string;
  code: string;
}

@Component({
  selector: 'app-new-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent implements OnInit {

  wallet: Wallet;
  currencies: Currency[];

  constructor(private router: Router, private location: Location, private walletService: WalletService) { }

  ngOnInit() {
    this.currencies = [
      { code: 'BTC', name: 'Bitcoin' },
      { code: 'BCH', name: 'Bitcoin Cash' },
      { code: 'ETH', name: 'Euthereum' },
      { code: 'LTC', name: 'LiteCoin' }
    ];
  }

  addWallet(data) {
    this.walletService.addWallet(data)
      .subscribe(
        () => this.router.navigate(['wallet']),
        error => console.log(error)
      );
  }

  goBack() {
    this.location.back();
  }

}


