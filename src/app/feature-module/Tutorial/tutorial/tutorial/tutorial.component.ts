import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
export interface Passanger{
  id:number,
  fullname:string,
  checkedIn:boolean,
  CheckedInDate?:number
}
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
 name:string="name value";
 passangers!:Passanger[];
  constructor(private passengerService:ServiceService) { }

  ngOnInit(): void {
  //   this.passengerService.getPassenger().subscribe(response => { 
  //     this.passangers = response;
  //     console.log( this.passangers);
  // });

  this.passengerService.getPassenger().subscribe(data=>{
     this.passangers = data;
  });

  }
handleChange(event:any){
  this.name=event.target.value;
}
handleRemove(event:any){
  this.passangers=this.passangers.filter((passanger:Passanger)=>{
    return passanger.id!==event.id;
  }) 
  console.log("Remove Event emmited", event)

}
handleEdit(event:Passanger){
  console.log("handle edit");
  this.passangers=this.passangers.map((passnger:Passanger)=>{
    if(passnger.id==event.id){
      passnger=Object.assign({},passnger,event);

    }
    return passnger;
  }
  );
  console.log("Edit Event emmited", this.passangers)

}
}
