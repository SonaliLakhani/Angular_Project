import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
 
  constructor(private router:Router) {
    
   }

  ngOnInit() {
    this.loginForm=new FormGroup({
      email:new FormControl("",Validators.compose([Validators.email,Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)]))
    });
  }

  goToRegister() : void{
    this.router.navigate(['/gadget']);
  }
  

}
