import { identifierName } from '@angular/compiler';
import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';
import { ProductDetailComponent } from '../../product-detail/product-detail/product-detail.component';
import {EditSettingsModel, PageSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
      grid: {
          'SaveButton': 'Submit',
          'CancelButton': 'Discard',
          'EditFormTitle':'Update Product',
          'AddFormTitle':'Add New Product'
          
      }
  }
});

interface product{
  id:number;
  name:string;
  quality:string;
  exDate:Date;
  content:number;

}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChild('grid')
  public grid!: GridComponent;
  public editSettings!: EditSettingsModel;
  public toolbar!: ToolbarItems[];
  public pageSettings!: Object;
  public formatoptions!: Object;
  url:string=""
  @Output()
  updating:boolean=false
  toggle:boolean=false

  constructor( private productService: ServiceService, private router:Router) { }
  //, private comp:ProductDetailComponent
  productList:any="";
  EditProduct:any=""
  
  

  ngOnInit(): void {

      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', showDeleteConfirmDialog: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
      this.productService.getService('product').subscribe(response => {
      this.productList = response;
      this.pageSettings = { pageSize: 6 };
  });
  }

  deleteProduct(id:number){
    this.url="product/"+id;
    this.toggle=!this.toggle;
    return this.productService.deleteService(this.url)
  }

  @Output()
  edit = new EventEmitter<FormGroup>();

  @Output()
  deleted = new EventEmitter<FormGroup>();
  
  editProduct(id:number){
    this.deleted.emit();
    this.url="product/"+id
    this.productService.getService(this.url).subscribe(response => {
    this.EditProduct = response;
  });
  this.updating=true
   this.router.navigate(['/feature/product/product/detail/'+id])
  }

addbig:boolean=false;
editbig:boolean=false;

actionBegin(args:any) {
  if (args.requestType === 'beginEdit') {
       this.editbig=true;
       }   
  if (args.requestType === 'add'){
     this.addbig=true;
       }    
}

actionComplete(args: any) {
  if (args.requestType === 'save' ) {
      if(this.addbig){
        this.url="product"
        this.productService.postService(this.url, args.data);
        this.addbig=false;
        alert("Product Added Successfuly")
      }
      else if(this.editbig){
        this.productService.putService('product/'+args.data.id, args.data);
        this.editbig=false;
        alert("Product Updated Successfuly")

      }else{

      }
  }
  if (args.requestType === 'delete'){
          // this.url='product/'+args.rowdata.id;
            console.log("row data : ", args.data);
          // this.productService.deleteService(this.url);
        } 
}

}
