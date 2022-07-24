import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

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
  async ngOnInit(){
    this.deliveryList = this.deliveryService.getService('Orders');
}


deleteOrder(event:any){
  this.deliveryService.deleteService('Orders/'+event);
  this.deliveryList = this.deliveryService.getService('Orders');
}
detalilOrder(event:any){
  this.router.navigate(['/feature/delivery/delivery/detail/'+event]);
  console.log("detail emited");

}

deleteDelivery(id:number){

}

  async editDelivery(id:number){
     await this.router.navigate(['/feature/driver/driver/detail/'+id])
  }

}
