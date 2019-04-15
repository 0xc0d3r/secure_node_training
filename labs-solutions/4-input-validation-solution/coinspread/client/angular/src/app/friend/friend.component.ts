import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { FriendService } from './friend.service';
import { Friend } from './friend';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friends: Friend[];
  errorMessage: string;

  constructor(private friendService: FriendService, public auth: AuthService) { }

  ngOnInit() {
    this.getFriends();
  }

  private getFriends() {
    this.friendService.getFriends()
      .subscribe(
        data => this.friends = data,
        error => {
          this.errorMessage = error.message;
        }
      );
  }
}
