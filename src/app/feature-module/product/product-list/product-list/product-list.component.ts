import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor( private productService: ServiceService) { }
  productList:any="";
  ngOnInit(): void {
    this.productService.getService('product').subscribe(response => {
      this.productList = response;
  });
  }

}
