import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  deliveryList!:Observable<any>;
  constructor(private deliveryService:ServiceService,private router:Router ) { }
list=[{
  name:'orderedBy',
  text:'Ordered By'
},
{
  name:'driverId',
  text:'Driver'
},
{
  name:'start',
  text:'Start'
},
{
  name:'destination',
  text:'Destination'
},
{
  name:'status',
  text:'Status'
}]

link="/feature/delivery/delivery/detail";
link_name="New Order";
title:string="Pending Order List";
delev:any;
order:boolean=true;
  async ngOnInit(){
    this.deliveryList = this.deliveryService.getService('Orders/Pending');
}


deleteOrder(event:any){
  this.deliveryService.deleteService('Orders/'+event);
  this.ngOnInit();
}
detalilOrder(event:any){
  this.router.navigate(['/feature/delivery/delivery/detail/'+event]);
  console.log("detail emited");

}

async  deliveredEvent(event:any){
  console.log("deliveredEvent",event);
  this.deliveryService.getService('Orders/'+event).subscribe(
    respons=>{
      this.delev=respons;
      this.delev.status=true;
      console.log("var :",this.delev)
      this.deliveryService.putService("Orders/"+this.delev.id,this.delev);
      this.deliveryList = this.deliveryService.getService('Orders/Pending');
    }
  );

}

deleteDelivery(id:number){

}

  async editDelivery(id:number){
     await this.router.navigate(['/feature/driver/driver/detail/'+id])
  }

}
