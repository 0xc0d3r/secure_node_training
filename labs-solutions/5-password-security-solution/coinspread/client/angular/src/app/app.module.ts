import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { ROUTES } from './app.routes';
import { TabsModule, AlertModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';


import { API_DOMAIN } from './app.constants';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { ActivityComponent } from './activity/activity.component';

import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { CompanionComponent } from './companion/companion.component';
import { FriendComponent } from './friend/friend.component';
import { FeesComponent } from './fees/fees.component';

import { AuthGuard } from './auth/authguard.service';
import { RoleGuard } from './auth/roleguard.service';

import { AuthService } from './auth/auth.service';
import { WalletService } from './wallet/wallet.service';
import { ActivityService } from './activity/activity.service';

import { CompanionService } from './companion/companion.service';
import { FriendService } from './friend/friend.service';
import { FeesService } from './fees/fees.service';
import { PaymentService } from './payment/payment.service';
import { FeesRouterResolver } from './fees/fees.router.resolver';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddFriendRouterResolver } from './add-friend/add-friend.router.resolver';
import { PaymentComponent } from './payment/payment.component';
import { PaymentWalletsResolver } from './payment/payment.wallets.resolver';
import { PaymentFriendResolver } from './payment/payment.friend.resolver';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WalletComponent,
    ActivityComponent,
    AddWalletComponent,
    CompanionComponent,
    FriendComponent,
    FeesComponent,
    AddFriendComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [API_DOMAIN]
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    RoleGuard,
    WalletService,
    ActivityService,
    CompanionService,
    FriendService,
    FeesService,
    PaymentService,
    FeesRouterResolver,
    AddFriendRouterResolver,
    PaymentWalletsResolver,
    PaymentFriendResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
