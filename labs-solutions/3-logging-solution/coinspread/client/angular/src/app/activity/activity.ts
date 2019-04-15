import { SafeHtml } from '@angular/platform-browser';

export interface Activity {
  from: string;
  note: string;
  trustedNote: SafeHtml;
}
