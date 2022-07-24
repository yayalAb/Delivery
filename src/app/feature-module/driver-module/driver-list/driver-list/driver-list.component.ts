import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  DriverList!:Observable<any>;
  constructor(private driverService:ServiceService,private router:Router ) { }

  list=[{
    name:'name',
    text:'Full Name'
  },
  {
    name:'email',
    text:'Email'
  },
  {
    name:'phone',
    text:'Phone'
  },
  {
    name:'age',
    text:'Age'
  }];

ngOnInit(): void {
      this.DriverList = this.driverService.getService('Drivers');
}

link="/feature/driver/driver/detail";
link_name="New Driver";



deleteDriver(event:any){
  this.driverService.deleteService('Drivers/'+event);
  this.DriverList = this.driverService.getService('Drivers');
}
detalilDriver(event:any){
 this.router.navigate(['/feature/driver/driver/detail/'+event]);
  console.log("detail emited");

}
}
