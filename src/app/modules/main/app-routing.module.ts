import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { InfoUserComponent } from './pages/info-user/info-user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransferComponent } from './pages/transfer/transfer.component';
// import {
//   AngularFireAuthGuard,
//   redirectLoggedInTo,
//   redirectUnauthorizedTo,
// } from '@angular/fire/compat/auth-guard';
import { UserComponent } from './pages/user/user.component';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// const redirectLoggedInToinfouser = () => redirectLoggedInTo(['UserComponent']);

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectLoggedInToinfouser },
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'infouser',
    component: InfoUserComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'deposit',
    component: DepositComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'transfer',
    component: TransferComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'UserComponent',
    component: UserComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
