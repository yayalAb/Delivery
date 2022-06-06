import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  VehicleList:any=''
  constructor(private VehicleService:ServiceService,private router:Router ) { }



  ngOnInit(): void {
    this.VehicleService.getService('vehicle').subscribe(response => {
      this.VehicleList = response;
  });
}

  editvehicle(id:any){
    this.router.navigate(['/feature/vehicle/vehicle/detail/'+id])
  }

  deletevehicle(id:any){

  }

}
