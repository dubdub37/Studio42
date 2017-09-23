import { Component } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';


@Component({
  selector: 'app-nav3',
  templateUrl: './nav3.component.html',
  styleUrls: ['./nav3.component.css']
})
export class Nav3Component {
items: Array<any> = [];

constructor() {
  this.items = [
    {name: 'first'},
    {name: 'second'},
    {name: 'third'},
    {name: 'fourth'},
    {name: 'fifth'},
    {name: 'sixth'},
  ];
}
}



