import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Registerpart1Component } from './registerpart1/registerpart1.component';
import { Registerpart2Component } from './registerpart2/registerpart2.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { GadgetSelectComponent } from './gadget-select/gadget-select.component';
import { MobileSelectComponent } from './mobile-select/mobile-select.component';
import { LaptopSelectComponent } from './laptop-select/laptop-select.component';
import { MobilePlanComponent } from './mobile-plan/mobile-plan.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component'; 
import {SharedServiceService} from './shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    Registerpart1Component,
    Registerpart2Component,
    RegisterSuccessComponent,
    GadgetSelectComponent,
    MobileSelectComponent,
    LaptopSelectComponent,
    MobilePlanComponent,
    PaymentComponent,
    PaymentSuccessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
