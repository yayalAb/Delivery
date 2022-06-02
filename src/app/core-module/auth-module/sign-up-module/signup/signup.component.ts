import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 
  constructor() { }
   signUp:boolean=true
  ngOnInit(): void {
  }
  async SignUpUser(event: FormGroup) {
    const { email, password } = event.value;
    console.log("Sign Up User", event.value );
   // this.authservice.createUser(event);
    
  }


}
