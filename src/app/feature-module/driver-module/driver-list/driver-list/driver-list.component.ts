import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  DriverList:any=''
  constructor(private driverService:ServiceService,private router:Router ) { }



  ngOnInit(): void {
    this.driverService.getService('driver').subscribe(response => {
      this.DriverList = response;
  });
}
  @Output()
  deleted = new EventEmitter<FormGroup>();

  editProduct(id:any){
    this.router.navigate(['/feature/driver/driver/detail/'+id])
  }
  deleteProduct(id:number){
   // this.deleted.emit();
    console.log("deleted", id)
    this.driverService.deleteService('driver/'+id)
    this.router.navigate(['/feature/driver/driver/list'])

  }
}
