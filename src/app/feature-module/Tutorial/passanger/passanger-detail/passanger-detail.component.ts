import { Component, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';

import { Passanger } from '../../tutorial/tutorial/tutorial.component';

@Component({
  selector: 'app-passanger-detail',
  templateUrl: './passanger-detail.component.html',
  styleUrls: ['./passanger-detail.component.css']
})
export class PassangerDetailComponent implements OnChanges {
  @Input()
  detail!:Passanger;

  @Output()
  remove:EventEmitter<any>=new EventEmitter();

  @Output()
  edit:EventEmitter<any>=new EventEmitter();

  editing:boolean=false;
  constructor() { }

  ngOnChanges(changes:any){
    if(changes.detail){
      this.detail=Object.assign({},changes.detail.currentValue)
    }
    console.log(changes)

  }
  OnChange(name:string){
    this.detail.fullname=name;

  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail);
    }
    this.editing=!this.editing;
  }
  onRemove(){
    this.remove.emit(this.detail);
  }

}
