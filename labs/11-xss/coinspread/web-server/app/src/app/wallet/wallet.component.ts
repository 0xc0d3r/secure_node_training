import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { WalletService } from './wallet.service';
import { Wallet } from './wallet';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallets: Wallet[];
  errorMessage: string;

  constructor(private walletService: WalletService,
    public auth: AuthService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getWallets();
  }

  private getWallets() {
    this.walletService.getWallets()
      .subscribe(data => {
        this.wallets = data.map(wallet => {
          wallet.trustedName = this.sanitizer.bypassSecurityTrustHtml(wallet.name);
          return wallet;
        });
      }, error => {
        this.errorMessage = error.message;
      });
  }

}
