import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  VehicleList!:Observable<any>;
  constructor(private VehicleService:ServiceService,private router:Router ) { }

  list=[{
    name:'vechileOwner',
    text:'vechile Owner'
  },
  {
    name:'vechileDriver',
    text:'Driver'
  },
  {
    name:'vechileType',
    text:'Vechile Type'
  },
  {
    name:'vechileModel',
    text:'Vechile Model'
  }];

ngOnInit(): void {
      this.VehicleList = this.VehicleService.getService('vehicles');
}

link="/feature/vehicle/vehicle/detail";
link_name="New Vehicle";



deleteVehicle(event:any){
  this.VehicleService.deleteService('vehicles/'+event);
  this.VehicleList = this.VehicleService.getService('vehicles');
}
detalilVehicle(event:any){
 this.router.navigate(['/feature/vehicle/vehicle/detail/'+event]);
  console.log("detail emited");

}
}


