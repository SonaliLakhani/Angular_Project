import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-laptop-brand-select',
  templateUrl: './laptop-brand-select.component.html',
  styleUrls: ['./laptop-brand-select.component.scss']
})
export class LaptopBrandSelectComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  goToHpSelect() : void{
    this._router.navigate(['/hpSelect']);
  }

  
  goToAcerSelect() : void{
    this._router.navigate(['/acerSelect']);
  }
}
