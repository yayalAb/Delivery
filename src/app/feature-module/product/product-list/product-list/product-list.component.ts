import { identifierName } from '@angular/compiler';
import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';
import { ProductDetailComponent } from '../../product-detail/product-detail/product-detail.component';
import {PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  url:string=""
  @Output()
  updating:boolean=false
  toggle:boolean=false
  public pageSettings: any="";
  constructor( private productService: ServiceService, private router:Router) { }
  //, private comp:ProductDetailComponent
  productList:any="";
  EditProduct:any=""
  
  ngOnInit(): void {
    this.productService.getService('product').subscribe(response => {
      this.productList = response;
      this.pageSettings = { pageSize: 6 };
  });
  }

  deleteProduct(id:number){
    this.url="product/"+id;
    this.toggle=!this.toggle;
    return this.productService.deleteService(this.url).subscribe();
  }
  @Input()
  deleted = new EventEmitter<FormGroup>();
  
  editProduct(id:number){
    this.deleted.emit();
    this.url="product/"+id
    this.productService.getService(this.url).subscribe(response => {
    this.EditProduct = response;
   // this.ngOnInit()
  });
  this.updating=true
   this.router.navigate(['/feature/product/product/detail/'+id])
  }
  @ViewChild('grid')
  public grid: any="";
  rowSelected(args: RowSelectEventArgs) {
    const selectedrowindex: number[] = this.grid.getSelectedRowIndexes();  // Get the selected row indexes.
    alert(selectedrowindex); // To alert the selected row indexes.
    const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
}

EventHandler(event:any){
  console.log("event  handler:")
}

}
