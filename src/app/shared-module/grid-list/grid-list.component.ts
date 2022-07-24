import { identifierName } from '@angular/compiler';
import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';
import {EditSettingsModel, PageSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';
import { Observable } from 'rxjs';

export interface Lists{
  fieldName:string,
  Title:string,
  EditType?:string
}


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


@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

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
  displaylist!:Observable<any>
  EditProduct:any=""
  @Input()
  list:Lists[]=[];

  @Input()
  ListUrls:string="";

  @Input()
  Title:string="";

  async ngOnInit() {
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', showDeleteConfirmDialog: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
      this.displaylist = this.productService.getService(this.ListUrls);
      this.pageSettings = { pageSize: 6 };
      }


addbig:boolean=false;
editbig:boolean=false;

actionBegin(args:any) {
  if (args.requestType === 'beginEdit') {
       this.editbig=true;
       console.log("Action begin Edit");
       }   
  if (args.requestType === 'add'){
     this.addbig=true;
     console.log("Action begin Add");
       }    
}

actionComplete(args: any) {
  if (args.requestType === 'save' ) {
      if(this.addbig){
        console.log(this.ListUrls, " Sent Data : ", args.data);
        this.productService.postService(this.ListUrls, args.data);
        console.log(this.ListUrls, " Sent Data1. : ", args.data);
        this.addbig=false;
        alert(this.Title+" : Added Successfuly")
      }
      else if(this.editbig){
        this.productService.putService(this.ListUrls+"/"+args.data.id, args.data);
        this.editbig=false;
        alert(this.Title+" Updated Successfuly")

      }else{
      }
  }
  if (args.requestType === 'delete'){
          this.url=this.ListUrls+"/"+args.rowdata.id;
            // console.log("row data : ", args.data);
          this.productService.deleteService(this.url);
        } 
}

}












































