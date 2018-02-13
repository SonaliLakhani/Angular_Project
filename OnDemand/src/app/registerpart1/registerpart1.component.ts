import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerpart1',
  templateUrl: './registerpart1.component.html',
  styleUrls: ['./registerpart1.component.scss']
})
export class Registerpart1Component implements OnInit {
  registerpart1Form;

  constructor(private _router : Router) {

   }

   registerNext() : void{
     this._router.navigate(['/register2']);
   }
  ngOnInit() {
    this.registerpart1Form=new FormGroup({
      firstName:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)])),
      lastName:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)])),
      dob:new FormControl("",Validators.compose([Validators.required])),
      mobileNumber:new FormControl("",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")])),
      aadhaar:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[0-9]*")])),
      email:new FormControl("",Validators.compose([Validators.email,Validators.required])),
      addLine1:new FormControl("",Validators.compose([Validators.required])),
      addLine2:new FormControl("",Validators.compose([Validators.required])),
      state:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      city:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      pincode:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[0-9]*")]))
   });
  }

}
