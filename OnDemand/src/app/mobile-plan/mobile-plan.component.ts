import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
//import { Input } from '@angular/core/src/metadata/directives';
import { FormsModule } from '@angular/forms';
import { equal, deepEqual } from 'assert';

@Component({
  selector: 'app-mobile-plan',
  templateUrl: './mobile-plan.component.html',
  styleUrls: ['./mobile-plan.component.scss']
})
export class MobilePlanComponent implements OnInit {
  mobilePlanForm;
  @Input() plan : String;
  @Input() period1 : String;
  flag : string
  premium : string
  constructor(private _router : Router) { }

  ngOnInit() {
    //this.premium= '100000';
    //console.log(this.premium);
    this.mobilePlanForm = new FormGroup({
      plan:new FormControl("",Validators.compose([Validators.required])),
      //period:new FormControl("",Validators.compose([Validators.required])), 
   
    })
  }

  goToPayment() : void{
    this._router.navigate(['/payment']);
  }

  perDay():void{
    this.flag="D";
    console.log(this.flag);
    this.calcpremium();
  }

  perWeek():void{
    this.flag="W";
    console.log(this.flag);
    this.calcpremium();
  }
  

  perMonth():void{
    this.flag="M";
    console.log(this.flag);
    this.calcpremium();
  }

  calcpremium() : void{
    console.log("inside calc prem");
    console.log(this.plan);
  
    console.log(this.period1);
    if(this.plan==="Platinum Plus"&&this.flag==="D"){
      //console.log("hi");  
      this.premium='10'   
    }
    else if(this.plan==="Platinum Plus"&&this.flag==="W"){
      this.premium='60'
    }
    else if(this.plan==="Platinum Plus"&&this.flag==="M"){
      this.premium='220'
    }
    else if(this.plan==="Gold Plus"&&this.flag==="D"){
      //console.log("hi");  
      this.premium='8'   
    }
    else if(this.plan==="Gold Plus"&&this.flag==="W"){
      this.premium='50'
    }
    else if(this.plan==="Gold Plus"&&this.flag==="M"){
      this.premium='180'
    }
    else if(this.plan==="Silver Plus"&&this.flag==="D"){
      //console.log("hi");  
      this.premium='5'   
    }
    else if(this.plan==="Silver Plus"&&this.flag==="W"){
      this.premium='30'
    }
    else if(this.plan==="Silver Plus"&&this.flag==="M"){
      this.premium='100'
    }
    
  }


}
