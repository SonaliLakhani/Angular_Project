import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Registerpart1Component } from './registerpart1/registerpart1.component';
import { Registerpart2Component } from './registerpart2/registerpart2.component';
import { RegisterSuccessComponent} from './register-success/register-success.component';
import { GadgetSelectComponent } from './gadget-select/gadget-select.component';
import { MobileSelectComponent } from './mobile-select/mobile-select.component';
import { LaptopSelectComponent } from './laptop-select/laptop-select.component';
import { MobilePlanComponent } from './mobile-plan/mobile-plan.component';
import { PaymentComponent } from './payment/payment.component';
import {PaymentSuccessComponent} from './payment-success/payment-success.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:Registerpart1Component
  },
  {
    path:'register2',
    component:Registerpart2Component
  },
  {
    path:'registerSuccess',
    component:RegisterSuccessComponent
  },
  {
    path:'gadget',
    component:GadgetSelectComponent
  },
  {
    path:'mobileSelect',
    component:MobileSelectComponent
  },
  {  
    path:'laptopSelect',
    component:LaptopSelectComponent
  },
  {  
    path:'mobilePlan',
    component:MobilePlanComponent
  },
  {  
    path:'payment',
    component:PaymentComponent
  },
  {  
    path:'paymentSuccess',
    component:PaymentSuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
