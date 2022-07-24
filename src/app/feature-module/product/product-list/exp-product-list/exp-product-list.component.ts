import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/shared-module/grid-list/grid-list.component';

@Component({
  selector: 'app-exp-product-list',
  templateUrl: './exp-product-list.component.html',
  styleUrls: ['./exp-product-list.component.css']
})
export class ExpProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
      EditType:"datepickeredit" 
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
      Title:"Quantity", 
      EditType:"numericedit" 
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
  ListUrls:string="Product/ExpireProducts";
  Title:string="Expire Product";
}
