import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Companion } from '../companion/companion';
import { FriendService } from '../friend/friend.service';

@Component({
  selector: 'app-new-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  companion: Companion;
  errorMessage: any;
  successMessage: any;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private friendService: FriendService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { companion: Companion }) => {
        this.companion = data.companion;
      });
  }

  addFriend(data) {
    this.friendService.addToFriends(data)
      .subscribe(
        () => this.router.navigate(['companion']),
        error => this.errorMessage = error.message
      );
  }

  goBack() {
    this.router.navigate(['companion']);
  }

}


