import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';
import { user } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  error:boolean=false
  massage!:String;
  user!:any;
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
   try{
      await this.authService.getService("auth/" + event.value.email).subscribe(
          response => { this.user = response;
            if(event.value.email===this.user.email&& event.value.password===this.user.password){  
                 localStorage.setItem('isLoggedIn', "true");  
                 localStorage.setItem('role', this.user.UserType); 
                 localStorage.setItem('token', event.value.email); 
                 this.route.navigate(['/feature/product/product/list'])
              }
              else{
                this.error=true;
                this.massage="Wrong Password Or Email";
                console.log("error on login")
              }
          }); 
      }
  catch{
    this.massage="Error";
  }
 
 }
 logOut(){
   this.logout.emit();
   this.authService.logout();
 }
}
