import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product_cout:number=0;
  productList:any;
  roduct_driv:number=0;
  roduct_order:number=0;
  roduct_vic:number=0;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getService('product').subscribe(response => {
      this.productList = response;
  });
    this.product_cout=this.productList.length;
  }
  public cellSpacing: number[] = [10, 10];
  


}
