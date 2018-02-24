import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gadget-select',
  templateUrl: './gadget-select.component.html',
  styleUrls: ['./gadget-select.component.scss']
})
export class GadgetSelectComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {

  }

  goToMobileSelect(){
    //console.log("hi");
    this.router.navigate(['/mobileSelect']);
  }

  goToLaptopSelect(){
    this.router.navigate(['/laptopSelect']);
  }
}
