import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  error:boolean=false
  massage:String=""
  user:any=""
 constructor( private route:Router) { }

 ngOnInit(): void {
 }

 async loginUser(event: FormGroup) {
   // console.log("user Fro server",this.authservice.loginUser(event.value.email))
   if(event.value.email==="yayalabayneh2@gmail.com"&& event.value.password==="123456"){
     this.route.navigate(['/feature/product/product/list'])
   }else{
     this.error=true;
     this.massage="Wrong Password Or Email"
   }
 }


 
}
