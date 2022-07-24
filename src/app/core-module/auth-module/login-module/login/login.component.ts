import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:boolean=false
  massage!:String;
  user!:any;
  nuser!:Observable<any>;
  id!:string;
  log:boolean=false;
 constructor( private route:Router,
  private authService : ServiceService) { }


 ngOnInit() {
  console.log("log on init : ",localStorage.getItem('isLoggedIn'),localStorage.getItem('token'));
  if(localStorage.getItem('token')?.toString().length){
    console.log("log on init True1");
    this.route.navigate(['/core/dash']);  
  }
 }
 @Output()
 login = new EventEmitter<any>();



 async loginUser(event:FormGroup) {
     try{
       this.authService.getService("Auths/" + event.value.email).subscribe(
          response => { this.user = response;
            if(event.value.email===this.user.email&& event.value.password===this.user.password){
                 
                 localStorage.setItem('isLoggedIn', "true");  
                 localStorage.setItem('role', this.user.userType); 
                 localStorage.setItem('token', event.value.email); 
                 this.id=event.value.email;
                 this.login.emit();
                 window.location.reload();
                 this.authService.user= this.authService.loginUser("auth/" + event.value.email);
                 this.route.navigate(['/core/dash']);  
              }
              else{
                this.error=true;
                this.massage="Wrong Password Or Email";
                console.log("error on login")
              }
          },
          (error:any)=>{
            this.error=true;
            this.massage="Wrong Email Address";
          }
          ); 
         }
      catch{
        this.error=true;
        this.massage="Wrong Email Address";
      }
 
 }
}
