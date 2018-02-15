import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mobile-select',
  templateUrl: './mobile-select.component.html',
  styleUrls: ['./mobile-select.component.scss']
})
export class MobileSelectComponent implements OnInit {

  mobileSelectForm;
  constructor(private _router : Router) { }

  ngOnInit() {
    this.mobileSelectForm = new FormGroup({
      brand:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      model:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)])),
      purchaseDt:new FormControl("",Validators.compose([Validators.required])),
      purchaseAmt:new FormControl("",Validators.compose([Validators.required])),
      imei:new FormControl("",Validators.compose([Validators.required])),
      //fileUpload:new FormControl("",Validators.compose([Validators.required])),
    })
  }

  goToMobilePayment() : void{
    this._router.navigate(['']);
  }

}
