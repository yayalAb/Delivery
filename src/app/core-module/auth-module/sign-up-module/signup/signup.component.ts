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
  constructor(private authService:ServiceService) { }
   signUp:boolean=true
  ngOnInit(): void {
  }
  async SignUpUser(event: FormGroup) {
    try{
      const { email, password } = event.value;
       console.log("Sign Up User", event.value );
       this.authService.postService('auth',event.value)
    }catch(err){
      this.massage="error on Signup";
    }
  }


}
