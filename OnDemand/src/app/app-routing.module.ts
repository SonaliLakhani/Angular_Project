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
import {MobileBrandSelectComponent} from './mobile-brand-select/mobile-brand-select.component';
import { SamsungSelectComponent } from './samsung-select/samsung-select.component';
import { AppleSelectComponent } from './apple-select/apple-select.component';
import {LaptopBrandSelectComponent} from './laptop-brand-select/laptop-brand-select.component';
import { HpSelectComponent } from './hp-select/hp-select.component';
import { AcerSelectComponent } from './acer-select/acer-select.component';

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
  {  
    path:'mobileBrandSelect',
    component:MobileBrandSelectComponent
  },
  {  
    path:'samsungSelect',
    component:SamsungSelectComponent
  },
  {  
    path:'appleSelect',
    component:AppleSelectComponent
  },
  {  
    path:'laptopbrandSelect',
    component:LaptopBrandSelectComponent
  },
  {  
    path:'hpSelect',
    component:HpSelectComponent
  },
  {  
    path:'acerSelect',
    component:AcerSelectComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
