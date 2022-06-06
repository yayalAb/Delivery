import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  url:string=""
  @Input()
  data:any=""
  product:any
  updating:boolean=false
  constructor(private route:Router, private productService:ServiceService, private route1:ActivatedRoute) { }

  ngOnInit(): void {
    this.route1.paramMap.subscribe((params:ParamMap)=>{
      this.product=params.get('id')
    })
    if(this.product){
      this.data=this.productService.getService('product/'+this.product)
    }
  }


  addProduct(event:any){
   this.url="product"
   this.productService.postService(this.url,event.value)
    alert("Product Added Successfuly")
    
    //this.route.navigate(['/feature/product/product/list'])
  }

  updateProduct(event:any){
    this.data=event;
    this.updating=true
      
  }


}
