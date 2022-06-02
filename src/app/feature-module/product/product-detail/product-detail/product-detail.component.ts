import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  url:string=""
  constructor(private route:Router, private productService:ServiceService) { }

  ngOnInit(): void {
  }

  addProduct(event:any){
   this.url="product"
   this.productService.postService(this.url,event.value)
    alert("Product Added Successfuly")
    this.route.navigate(['/feature/product/product/list'])
  }

}
