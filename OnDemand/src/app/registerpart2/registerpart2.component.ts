import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerpart2',
  templateUrl: './registerpart2.component.html',
  styleUrls: ['./registerpart2.component.scss']
})
export class Registerpart2Component implements OnInit {
  
  registerpart2Form;
  constructor(private _router : Router) { }

  registerSuccess() : void{
    this._router.navigate(['/registerSuccess']);
  }

  ngOnInit() {
    this.registerpart2Form=new FormGroup({      
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)])),
      confirmPassword:new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)]))      
    });
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }


}
}
