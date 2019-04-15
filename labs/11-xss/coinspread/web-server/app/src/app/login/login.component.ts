import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string;

  constructor(private auth: AuthService) { }

  onLoginSubmit(credentials) {
    this.auth.login(credentials)
      .subscribe(
        response => this.auth.finishAuthentication(response.token),
        errorResponse => this.errorMessage = errorResponse.error.message || errorResponse.message
      );
  }

  onSignupSubmit(credentials) {
    // credentials.admin = true;
    this.auth.signup(credentials)
      .subscribe(
        response => this.auth.finishAuthentication(response.token),
        response => this.errorMessage = response.error.message
      );
  }

}
