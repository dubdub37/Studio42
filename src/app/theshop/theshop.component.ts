import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theshop',
  templateUrl: './theshop.component.html',
  styleUrls: ['./theshop.component.css']
})
export class TheshopComponent implements OnInit {
  images: any[];

  constructor() { }

  ngOnInit() {
    // this.images = [];
    // this.images.push({source:'assets/img/aboutUsIcon.png', alt:'Description for Image 1', title:'Title 1'});
    // this.images.push({source:'assets/img/ArtistsIcon.png', alt:'Description for Image 2', title:'Title 2'});
    // this.images.push({source:'assets/img/portfolioIconBookSm.png', alt:'Description for Image 3', title:'Title 3'});
  }

}
