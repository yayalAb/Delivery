import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.css']
})
export class DeliveryDetailComponent implements OnInit {
  deliver:any=""
  toggle:boolean=false
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private Serves:ServiceService,
    private router1:ActivatedRoute
  ) { }

  driver:any=""
  ngOnInit(): void {
    // this.Serves.getService('driver').subscribe(response => {
    //   this.driver = response;
    // });
    this.driver= ['driver1', 'driver2', 'driver3', 'driver4', 'driver5'];
  }
   data=['product1', 'product2', 'product3', 'product4', 'product5']

  @Output()
  submitted = new EventEmitter<FormGroup>();
  form = this.fb.group({
    driver: ['', Validators.required],
    start: ['', Validators.required],
    end: ['', Validators.email],
    product:this.fb.array(['']),
    quantity:this.fb.array([''])
  });
  onSubmit(event:any){
    console.log(this.form.value)
    this.Serves.postService('delivery',this.form.value)
    this.router.navigate(['/feature/delivery/delivery/list'])
  }


  get product() {
    return this.form.get('product') as FormArray;
  }

  get quantity() {
    return this.form.get('quantity') as FormArray;
  }

  addproduct() {
    this.toggle=true
    this.product.push(new FormControl(''));
    this.quantity.push(new FormControl(''));
  }

  removeproduct(index: number) {
    this.product.removeAt(index);
    this.quantity.removeAt(index);
  }
}
