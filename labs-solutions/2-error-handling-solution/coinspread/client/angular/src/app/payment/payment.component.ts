import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PaymentService } from './payment.service';
import { FriendService } from '../friend/friend.service';
import { Wallet } from '../wallet/wallet';
import { Friend } from '../friend/friend';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  wallets: Wallet[];
  friend: Friend;
  errorMessage: any;
  successMessage: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private payFriendService: PaymentService,
    private friendService: FriendService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { wallets: Wallet[], friend: Friend }) => {
        this.wallets = data.wallets;
        this.friend = data.friend;
      });
  }

  payFriend(data) {
    this.payFriendService.pay(data)
      .subscribe(
        () => this.successMessage = 'Payment on its way!',
        errorResponse => {
          const message = errorResponse.error.message ? errorResponse.error.message : errorResponse.message;
          this.errorMessage = message;
        }
      );
  }

  goBack() {
    this.router.navigate(['friend']);
  }

}


