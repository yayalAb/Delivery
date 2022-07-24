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
      this.pageSettings = { pageSize: 6 };
  }
  
  @Output()
  deleteEvent  = new EventEmitter<any>();

  @Output()
  detailEvent  = new EventEmitter<any>();

  @Input()
  data!:any;

  @Input()
  list!:any;

  @Input()
  link!:string;

  @Input()
  link_name!:string


  delete(id:any){
    this.deleteEvent.emit(id);
  }

  detail(id:any){
    this.detailEvent.emit(id);
  }

}
