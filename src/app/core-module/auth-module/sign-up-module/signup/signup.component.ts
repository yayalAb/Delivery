import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Logger } from '@syncfusion/ej2-angular-grids';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

   massage!:string;
   error!:string;
   constructor(private authService:ServiceService) { }
   signUp:boolean=true
   ngOnInit(): void {
  }
  async SignUpUser(event: FormGroup) {
    try{
      await this.authService.postService('auth',event.value)
      this.massage="SignUp Successfuly"
    }catch(err){
      this.error="error on Signup";
    }
  }
}
