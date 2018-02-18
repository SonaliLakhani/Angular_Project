import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm;
  constructor(private _router : Router) { }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      card:new FormControl("",Validators.compose([Validators.required])),
      nameOnCard:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),     
      cardNumber:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[0-9]*")])),
      expMonth:new FormControl("",Validators.compose([Validators.required])),
      expYear:new FormControl("",Validators.compose([Validators.required])),
      //fileUpload:new FormControl("",Validators.compose([Validators.required])),
    })
  }

  goToPaymentSuccess() : void{
    this._router.navigate(['/paymentSuccess']);
  }
  

}
