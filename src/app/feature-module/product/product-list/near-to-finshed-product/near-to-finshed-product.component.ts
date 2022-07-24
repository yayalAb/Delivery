import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/shared-module/grid-list/grid-list.component';

@Component({
  selector: 'app-near-to-finshed-product',
  templateUrl: './near-to-finshed-product.component.html',
  styleUrls: ['./near-to-finshed-product.component.css']
})
export class NearToFinshedProductComponent implements OnInit {

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
ListUrls:string="Product/NearToFinshed";
Title:string="Near To Finsh Product";
}
