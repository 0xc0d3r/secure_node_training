import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeesService } from './fees.service';
import { Fees } from './fees';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})


export class FeesComponent implements OnInit {
  fees: Fees;
  errorMessage: string;
  successMessage: string;

  constructor(
    private route: ActivatedRoute, private router: Router, private location: Location, private feesService: FeesService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { fees: Fees }) => {
        this.fees = data.fees;
      });
  }

  private getFees() {
    this.feesService.getFees()
      .subscribe(
        data => this.fees = data[0],
        error => {
          this.errorMessage = error.message;
        }
      );
  }

  saveFees(data) {
    this.feesService.saveFees(data)
      .subscribe(
        () => this.successMessage = 'Changes saved successfuly!',
        response => {
          this.errorMessage = response.error.message;
        }
      );
  }

  goBack() {
    this.location.back();
  }
}


