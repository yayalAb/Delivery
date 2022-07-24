import { OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  changeDetection:ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Delivery System';
  id?:any="";
  notDisplay:boolean=false;
  user!:Observable<any>;
  role:any="";

 public treeSettings={loadOnDemand:true};
  constructor(private router:Router){  }
  ngOnInit(){ 
    if(localStorage.getItem('token')){
        this.id=localStorage.getItem('token');
        this.role=localStorage.getItem('role');
    } 
  }

  onLogout(){
    this.id="";
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token'); 
    this.router.navigate(['/'])
  }
  onlogin(){
    this.id=localStorage.getItem('token');
    this.role=localStorage.getItem('role');
    console.log("login Emited app.com");
  }
}
