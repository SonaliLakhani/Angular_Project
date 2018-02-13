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

}
