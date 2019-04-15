import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WalletComponent } from './wallet/wallet.component';
import { ActivityComponent } from './activity/activity.component';

import { CompanionComponent } from './companion/companion.component';
import { FriendComponent } from './friend/friend.component';

import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { AuthGuard } from './auth/authguard.service';
import { RoleGuard } from './auth/roleguard.service';
import { FeesComponent } from './fees/fees.component';
import { FeesRouterResolver } from './fees/fees.router.resolver';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddFriendRouterResolver } from './add-friend/add-friend.router.resolver';
import { PaymentComponent } from './payment/payment.component';
import { PaymentWalletsResolver } from './payment/payment.wallets.resolver';
import { PaymentFriendResolver } from './payment/payment.friend.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wallet/new', component: AddWalletComponent, canActivate: [AuthGuard] },
  { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] },
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard] },

  { path: 'companion', component: CompanionComponent, canActivate: [AuthGuard] },
  { path: 'friend', component: FriendComponent, canActivate: [AuthGuard] },
  {
    path: 'friend/add/:id', component: AddFriendComponent, canActivate: [AuthGuard],
    resolve: { companion: AddFriendRouterResolver }
  },
  {
    path: 'pay/:id', component: PaymentComponent, canActivate: [AuthGuard],
    resolve: { wallets: PaymentWalletsResolver, friend: PaymentFriendResolver }
  },
  {
    path: 'fees',
    component: FeesComponent,
    canActivate: [AuthGuard],
    resolve: { fees: FeesRouterResolver }
  }

];
