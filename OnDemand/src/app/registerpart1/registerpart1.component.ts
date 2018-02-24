import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SharedServiceService} from '../shared-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registerpart1',
  templateUrl: './registerpart1.component.html',
  styleUrls: ['./registerpart1.component.scss']
})
export class Registerpart1Component implements OnInit {
  registerpart1Form;
  @Input() emailId : String;
  constructor(private _router : Router,public _service : SharedServiceService) {

   }

   registerNext() : void{
     //console.log(this.emailId);
     this._service.saveData(this.emailId);
     //this._serv.saveData()
     //console.log(this.emailId);
     this._router.navigate(['/registerSuccess']);
   }
  ngOnInit() {
    console.log("hi");
    
    this.registerpart1Form=new FormGroup({
      firstName:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      lastName:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      dob:new FormControl("",Validators.compose([Validators.required])),
      mobileNumber:new FormControl("",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")])),
      aadhaar:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[0-9]*")])),
      email:new FormControl("",Validators.compose([Validators.email,Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)])),
      confirmPassword:new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)]))
      /*addLine1:new FormControl("",Validators.compose([Validators.required])),

      addLine2:new FormControl("",Validators.compose([Validators.required])),
      state:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      city:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      pincode:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[0-9]*")]))*/
   });
  }

 

}
