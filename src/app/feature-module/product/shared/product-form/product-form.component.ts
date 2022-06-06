import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Input() 
  isSignUp=false

@Input()
  product:any


  @Output()
  submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    name: ['', Validators.required],
    quality: ['', Validators.required],
    exDate: ['', Validators.required],
    content: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
    console.log("Onsubmit")
  }

  get nameValidate() {
    const control = this.form.get('name');
    return (control!.hasError('required') && control!.touched) || (this.form.get('name')?.value.length<2 && control!.touched);
  }
}
