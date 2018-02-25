import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-brand-select',
  templateUrl: './mobile-brand-select.component.html',
  styleUrls: ['./mobile-brand-select.component.scss']
})
export class MobileBrandSelectComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  goToSamsungSelect() : void{
    this._router.navigate(['/samsungSelect']);
  }
  goToAppleSelect() : void{
    this._router.navigate(['/appleSelect']);
  }
}
