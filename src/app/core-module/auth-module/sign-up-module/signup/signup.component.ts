import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

   massage!:string;
   error!:string;
   constructor(private authService:ServiceService,
               private route:Router) { }
   signUp:boolean=true
   ngOnInit(): void {
  }
  async SignUpUser(event: FormGroup) {
    console.log("sign Up :",event.value);
    try{
      await this.authService.postService('Auths',event.value)
      this.massage="SignUp Successfuly";
      this.route.navigate(['/core/login/auth/login']);
      
    }catch(err){
      console.log("Error on SignUp");
      this.error="error on Signup";
    }
  }
}
