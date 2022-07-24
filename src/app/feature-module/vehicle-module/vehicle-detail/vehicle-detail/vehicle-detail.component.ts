import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  vehicle:any=""
  data:any=""
  updating:boolean=true
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private Serves:ServiceService,
    private router1:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router1.paramMap.subscribe((params:ParamMap)=>{
      this.vehicle=params.get('id')
    })
    if(this.vehicle){
      this.data=this.Serves.getService('vehicles/'+this.vehicle).subscribe(response => {
        this.data = response;
    });
    }
  }

  @Output()
  submitted = new EventEmitter<FormGroup>();
  

  form = this.fb.group({
    vechileOwner: ['', Validators.required],
    vechileDriver: ['', Validators.required],
    vechileType: ['', Validators.required],
    vechileModel: ['', Validators.required]
  });


  onSubmit(event:any) {
    if (this.form.valid) {
      this.submitted.emit(this.form);
      console.log("Onsubmit Valid", this.form.value)
      if(this.vehicle){
        this.Serves.putService('vehicles/'+this.vehicle,this.form.value)
        console.log("Updating")
      }else{
        this.Serves.postService('vehicles',this.form.value)
        console.log("Creating")
      }
      
    }
    this.router.navigate(['/feature/vehicle/vehicle/list'])
  }

  get ownerValidate() {
    const control = this.form.get('owner');
    return (control!.hasError('required') && control!.touched);
  }

  get driverFormat() {
    const control = this.form.get('model');
    return control!.hasError('model') && control!.touched ;
  }
}
