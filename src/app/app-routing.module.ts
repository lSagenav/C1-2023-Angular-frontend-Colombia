import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './modules/auth/pages/Login/index.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { InfoUserComponent } from './modules/main/pages/info-user/info-user.component';
import { TransferComponent } from './modules/main/pages/transfer/transfer.component';
import { DepositComponent } from './modules/main/pages/deposit/deposit.component';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { TransferHistoryComponent } from './modules/main/components/transfer-history/transfer-history.component';
import { UserComponent } from './modules/main/pages/user/user.component';
import { DepositHistoryComponent } from './modules/main/components/deposit-history/deposit-history.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToinfouser = () => redirectLoggedInTo(['UserComponent']);

const routes: Routes = [
  {
    path: 'infouser',
    component: InfoUserComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'deposit',
    component: DepositComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'transfer',
    component: TransferComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'UserComponent',
    component: UserComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'depositHistory',
    component: DepositHistoryComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'transferHistory',
    component: TransferHistoryComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
