import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-acer-select',
  templateUrl: './acer-select.component.html',
  styleUrls: ['./acer-select.component.scss']
})
export class AcerSelectComponent implements OnInit {

  acerSelectForm;
  constructor(private router:Router) { }

  ngOnInit() {
    this.acerSelectForm=new FormGroup({
      // brand:new FormControl("",Validators.compose([Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
       model:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)])),
       purchaseDt:new FormControl("",Validators.compose([Validators.required])),
       purchaseAmt:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[0-9]*")])),
       imei:new FormControl("",Validators.compose([Validators.required])),
       //fileUpload:new FormControl("",Validators.compose([Validators.required])),
    });
  }

  goToMobilePlan() : void{
    this.router.navigate(['/mobilePlan']);
  }


}
