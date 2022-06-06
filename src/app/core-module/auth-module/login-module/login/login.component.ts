import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  error:boolean=false
  massage:String=""
  user:any=""
 constructor( private route:Router,
  private authService : ServiceService) { }
 ngOnInit(): void {
 }

 async loginUser(event: FormGroup) {
   // console.log("user Fro server",this.authservice.loginUser(event.value.email))
 if(event.value.email==="yayalabayneh2@gmail.com"&& event.value.password==="123456"){
    console.log("Login successful");    
      localStorage.setItem('isLoggedIn', "true");  
      localStorage.setItem('token', event.value.email);  
      window.location.reload()
     this.route.navigate(['/feature/product/product/list'])
   }else{
     this.error=true;
     this.massage="Wrong Password Or Email"
   }
 }
 logOut(){
   this.authService.logout();
 }
}
