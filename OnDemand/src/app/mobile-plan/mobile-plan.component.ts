import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-plan',
  templateUrl: './mobile-plan.component.html',
  styleUrls: ['./mobile-plan.component.scss']
})
export class MobilePlanComponent implements OnInit {
  mobilePlanForm;
  constructor(private _router : Router) { }

  ngOnInit() {
    this.mobilePlanForm = new FormGroup({
      plan:new FormControl("",Validators.compose([Validators.required])),
      //period:new FormControl("",Validators.compose([Validators.required])),    
    })
  }

  goToPayment() : void{
    this._router.navigate(['/payment']);
  }

}
