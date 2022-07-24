import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  list=[{
    name:"email",
    text:"Email"
 },
 {
   name:"userType",
   text:"Role"
}]; 
userlist:any;
link="/core/login/auth/signup";
link_name="New Account";
  constructor( private userService:ServiceService) { }

  async ngOnInit(){
    this.userlist = this.userService.getService('Auths');
}


deleteUser(event:any){
  console.log("event", event)
  this.userService.deleteService('Auths/'+event);
  this.userlist = this.userService.getService('Auths');
}
detalilUser(event:any){
  console.log("detail emited");
}
}
