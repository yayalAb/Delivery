import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/core-module/Service/service.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
 interface lists{
     code:number,
     name:string
 }

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.css']
})
export class DeliveryDetailComponent implements OnInit {
  productsList!:Observable<any>;
  orderedProductList:any;
  product1!:any;
  data!:any;
  
  productList:lists[]=[];
  ordersList!:any;
  sngproduct:lists={
    code:1,
     name:""
  };
  obj:any;
  sinpro  :Product[]=[];
  total :number=0;
  toggle:boolean=false
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private Serves:ServiceService,
    private router1:ActivatedRoute
  ) { }

  public driver= ['driver1', 'driver2', 'driver3', 'driver4', 'driver5'];
  orderId:any="";
  ngOnInit(): void { 
   
    this.productsList=this.Serves.getService('Product');
    this.router1.paramMap.subscribe((params:ParamMap)=>{
      this.orderId=params.get('id')
    })
    if(this.orderId){
      this.Serves.getService('Orders/'+this.orderId).subscribe(response => {
        this.data = response;  
    });
    this.Serves.getService('OrderLists').subscribe(response => {
      this.orderedProductList = response;  
      console.log("this.orderedProductList: ",this.orderedProductList)
      this.orderedProductList=this.orderedProductList.filter((item:any)=>item.orderid==this.orderId);

      console.log("this.orderedProductList : ",this.orderedProductList)
      for(let ordLis of this.orderedProductList){
          const control=this.form.get('products') as FormArray;
          this.form.get(['selector','productid'])?.setValue(ordLis.productid);
          this.form.get(['selector','Price'])?.setValue(ordLis.price);
          this.form.get(['selector','quantity'])?.setValue(ordLis.quantity);
          this.form.get(['selector','OrderId'])?.setValue(ordLis.orderid);
          control.push(this.createProduct(this.form.get('selector')?.value));

      }
           

  });
    }
 
     this.Serves.getService('Product').subscribe(response => {
      this.product1 = response;
      for(let lis of this.product1){
        this.sngproduct=
          {
            code:lis.id,
            name:lis.productName
          }
          this.productList.push(this.sngproduct);
      }
     });


    // this.form.get('products')?.valueChanges.subscribe(value => {
    //                 console.log("Chenged");             
    // });  
  }
public localFields:Object={text:'name', value:'code'};
public LocalWaterMark:string='Select Product';
  form = this.fb.group({
    orders:this.fb.group({
      orderedBy: [localStorage.getItem('token'), Validators.email],
      driverId:['', Validators.required],
      start: ['', Validators.required],
      destination: ['', Validators.required],
      status: [false, Validators.required],
    }),
    selector:this.fb.group({
      OrderId:'',
      productid:0,
      quantity:'10',
      Price:'',
    }),
    products:this.fb.array([]) 
  });

  createProduct(products:any){
    return new FormGroup({
        OrderId:new FormControl(products.OrderId || ''),
        productid:new FormControl(products.productid || 0),
        quantity:new FormControl(products.quantity || 0),
        Price:new FormControl(products.Price || 0)
    })
  }

  get products(){
    return (this.form.get('products') as FormArray).controls;
  }

  onAdd(){
    const control=this.form.get('products') as FormArray;
    this.productsList.subscribe(response => {
      this.product1 = response;
      const id=this.form.get(['selector','productid'])?.value;
      const cunt=this.form.get(['selector','quantity'])?.value; 
      this.Serves.getService("Product/" + id).subscribe(
          response => { this.obj = response;
          this.form.get(['selector','productid'])?.setValue(id);
          this.form.get(['selector','Price'])?.setValue(this.obj.unitPrice*cunt);
          this.form.get(['selector','OrderId'])?.setValue('4');
          control.push(this.createProduct(this.form.get('selector')?.value));
          });
          this.productList=this.productList.filter(item=>item.code!=id);
  }); 

  }
  onRemove(item:any, i:number){
    const control=this.form.get('products') as FormArray;
    control.removeAt(i);
  }
 
ReturnProduct(id:number):Observable<any>{
  
  // this.product1=this.Serves.getService('Product/'+id).subscribe;
  return this.Serves.getService('Product/'+id);
}
 
 async onSubmit(event:any){
  console.log("this.form.get('orders')?.value :",this.form.get('orders')?.value);
   await this.Serves.postService('Orders',this.form.get('orders')?.value);
    var id:number;
    this.Serves.getService('Orders').subscribe(
      respons=>{
        this.ordersList=respons;
        for(let ord of this.ordersList){
          id=ord.id;
        }
       id= id+1;
       var produc=this.form.get('products')?.value;
       for(let pro of produc ){
         pro.OrderId=id;
         this.Serves.postService('OrderLists',pro);
       }
       console.log("products : ",this.form.get('products')?.value);
       this.router.navigate(['/feature/delivery/delivery/list']);
      }
    )
  }

  // get product() {
  //   return this.form.get('product') as FormArray;
  // }

  // get quantity() {
  //   return this.form.get('quantity') as FormArray;
  // }

  // addproduct() {
  //   this.toggle=true
  //   this.product.push(new FormControl(''));
  //   this.quantity.push(new FormControl(''));
  // }

  // removeproduct(index: number) {
  //   this.product.removeAt(index);
  //   this.quantity.removeAt(index);
  // }
}
