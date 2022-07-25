import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/shared-module/grid-list/grid-list.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  constructor() { }
  list:Lists[]=[
      {
      fieldName:"productName",
      Title:"Product Name",  
     },
     {
      fieldName:"productCategory",
      Title:"Category",  
     },
     {
      fieldName:"productionDate",
      Title:"production Date", 
      EditType:"datepickeredit" ,
      formtstr:"date:\"MM/dd/yy\""
     }
     ,
     {
      fieldName:"expireDate",
      Title:"Expire Date", 
      EditType:"datepickeredit" 
     }
     ,
     {
      fieldName:"productQuality",
      Title:"Quality"
     },
     {
      fieldName:"content",
      Title:"Content", 
      EditType:"numericedit" 
     },
     {
      fieldName:"unitPrice",
      Title:"UnitPrice", 
      EditType:"numericedit" 
     }
  ];
  ListUrls:string="product";
  Title:string="Product";
}
