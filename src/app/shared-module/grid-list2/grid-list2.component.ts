import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-grid-list2',
  templateUrl: './grid-list2.component.html',
  styleUrls: ['./grid-list2.component.css']
})
export class GridList2Component implements OnInit {

  constructor(private service:ServiceService) { }

  public pageSettings!: PageSettingsModel;  
  ngOnInit(): void {
    // this.data= this.service.getService('Orders');
      this.pageSettings = { pageSize: 6 };
  }

  @Output()
  delete  = new EventEmitter<any>();

  @Output()
  detail  = new EventEmitter<any>();

  @Input()
  data!:any;


  deleteOrder(id:any){
    this.delete.emit(id);
  }

  detailOrder(id:any){
    this.detail.emit(id);
  }

}
