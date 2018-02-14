import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-laptop-select',
  templateUrl: './laptop-select.component.html',
  styleUrls: ['./laptop-select.component.scss']
})
export class LaptopSelectComponent implements OnInit {
  laptopSelectForm;
  constructor(private _router : Router) { }

  ngOnInit() {
    this.laptopSelectForm = new FormGroup({
      brand:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      model:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      purchaseDt:new FormControl("",Validators.compose([Validators.required])),
      purchaseAmt:new FormControl("",Validators.compose([Validators.required])),
      serialNo:new FormControl("",Validators.compose([Validators.required])),
      fileUpload:new FormControl("",Validators.compose([Validators.required])),
    })
  }

  goToLaptopPayment() : void{
    this._router.navigate(['']);
  }

}
