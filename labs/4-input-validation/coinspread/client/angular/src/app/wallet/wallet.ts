import { SafeHtml } from '@angular/platform-browser';

export interface Wallet {
  trustedName: SafeHtml;
  name: string;
  currency: string;
  balance: number;
  address: string;
}
