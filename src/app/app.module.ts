import { DepositHistoryComponent } from './modules/main/components/deposit-history/deposit-history.component';
import { TransferHistoryComponent } from './modules/main/components/transfer-history/transfer-history.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './modules/main/pages/app/app.component';
import { IndexComponent } from './modules/auth/pages/Login/index.component';
import { MyPipePipe } from './modules/main/pipes/my-pipe/my-pipe.pipe';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { InfoUserComponent } from './modules/main/pages/info-user/info-user.component';
import { DepositComponent } from './modules/main/pages/deposit/deposit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './modules/main/components/update-user/update-user.component';
import { environment } from 'src/environments/environment.prod';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PhonePipe } from './modules/main/pipes/phone.pipe';
import { UserComponent } from './modules/main/pages/user/user.component';
import { UserHomeComponent } from './modules/main/components/user-home/user-home.component';
import { TransferComponent } from './modules/main/pages/transfer/transfer.component';
import { NarvarComponent } from './modules/main/components/narvar/narvar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MyPipePipe,
    RegisterComponent,
    InfoUserComponent,
    DepositComponent,
    UpdateUserComponent,
    PhonePipe,
    UserComponent,
    UserHomeComponent,
    TransferComponent,
    TransferHistoryComponent,
    NarvarComponent,
    DepositHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
