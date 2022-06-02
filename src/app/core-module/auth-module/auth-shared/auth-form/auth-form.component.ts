import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {

  
 @Input() isSignUp=false
 


 @Output()
 submitted = new EventEmitter<FormGroup>();

 form = this.fb.group({
   email: ['', Validators.email],
   password: ['', Validators.required],
   UserType: ['']
 });

 constructor(
   private fb: FormBuilder
 ) {}

 onSubmit() {
   if (this.form.valid) {
     this.submitted.emit(this.form);
   }
 }

 get passwordInvalid() {
   const control = this.form.get('password');
   return (control!.hasError('required') && control!.touched) || (this.form.get('password')?.value.length<6 && control!.touched);
 }


 get emailFormat() {
   const control = this.form.get('email');
   return control!.hasError('email') && control!.touched ;
 }

}
