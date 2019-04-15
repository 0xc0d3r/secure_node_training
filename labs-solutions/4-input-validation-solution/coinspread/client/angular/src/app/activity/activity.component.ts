import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivityService } from './activity.service';
import { Activity } from './activity';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: Activity[];
  errorMessage: string;

  constructor(private activityService: ActivityService,
    public auth: AuthService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getActivitys();
  }

  private getActivitys() {
    this.activityService.getActivitys()
      .subscribe(data => {
        this.activities = data.map(activity => {
          activity.trustedNote = this.sanitizer.bypassSecurityTrustHtml(activity.note);
          return activity;
        });
      }, errorResponse => {
        const message = errorResponse.error.message ? errorResponse.error.message : errorResponse.message;
        this.errorMessage = message;
      });
  }

}
