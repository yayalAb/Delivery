import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
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
 constructor( private route:Router,
  private authService : ServiceService) { }
 ngOnInit(): void {
 }
 @Output()
 login = new EventEmitter<FormGroup>();

 @Output()
 logout = new EventEmitter<FormGroup>();

 @Input()
 login1 = new EventEmitter<FormGroup>();

 

 async loginUser(event: FormGroup) {
   // console.log("user Fro server",this.authservice.loginUser(event.value.email))
 if(event.value.email==="yayalabayneh2@gmail.com"&& event.value.password==="123456"){   
      localStorage.setItem('isLoggedIn', "true");  
      localStorage.setItem('token', event.value.email); 
      this.login.emit(event);
      this.login.emit(event);
     this.route.navigate(['/feature/product/product/list'])
   }else{
     this.error=true;
     this.massage="Wrong Password Or Email"
   }
 }
 logOut(){
   this.logout.emit();
   this.authService.logout();
 }
}
