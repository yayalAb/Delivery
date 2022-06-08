import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  deliveryList:any=''
  constructor(private deliveryService:ServiceService,private router:Router ) { }



  ngOnInit(): void {
    this.deliveryService.getService('delivery').subscribe(response => {
      this.deliveryList = response;
  });
}

deleteDelivery(id:number){

}

  editDelivery(id:number){
    this.router.navigate(['/feature/driver/driver/detail/'+id])
  }

}
