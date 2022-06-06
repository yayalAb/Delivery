import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  driver:any=""
  data:any=""
  updating:boolean=true
  drivers:any[]=[]
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private Serves:ServiceService,
    private router1:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router1.paramMap.subscribe((params:ParamMap)=>{
      this.driver=params.get('id')
    })
    if(this.driver){
      this.data=this.Serves.getService('driver/'+this.driver).subscribe(response => {
        this.data = response;
    });
    }
  }

  @Output()
  submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.required]
  });


  addtolist(event:any){
    if (this.form.valid) {
      this.drivers.push(this.form.value);
      this.form.reset()
    }
  }


  onSubmit(event:any) {
      this.submitted.emit(this.form);
      if(this.driver && this.form.valid){
        this.Serves.putService('driver/'+this.driver,this.form.value)
        console.log("Updating")
      }else{
       for( let der of this.drivers){
         this.Serves.postService('driver',der)
       }
       alert("Drivers Added Successfully")
        console.log("Creating")
      }
      
    this.router.navigate(['/feature/driver/driver/list'])
  }

  get nameValidate() {
    const control = this.form.get('name');
    return (control!.hasError('required') && control!.touched);
  }

  get emailFormat() {
    const control = this.form.get('email');
    return control!.hasError('email') && control!.touched ;
  }
  UpdateDriver(event:any){
    console.log("update driver")
  }
}



// (event:any){
//   this.url="product"
//   this.productService.postService(this.url,event.value)
//    alert("Product Added Successfuly")
//    this.route.navigate(['/feature/product/product/list'])