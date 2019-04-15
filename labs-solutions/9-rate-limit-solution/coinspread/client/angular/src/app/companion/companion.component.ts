import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { CompanionService } from './companion.service';
import { Companion } from './companion';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  companions: Companion[];
  errorMessage: string;

  constructor(private companionService: CompanionService, public auth: AuthService) { }

  ngOnInit() {
    this.getCompanions();
  }

  private getCompanions() {
    this.companionService.getCompanions()
      .subscribe(
        data => this.companions = data,
        errResponse => this.errorMessage = errResponse.error.message || errResponse.message
      );
  }
}
