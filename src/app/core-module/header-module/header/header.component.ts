import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:any=""
  constructor(private router:Router) { }
  @Output()
   logou= new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.id = localStorage.getItem('token');  
  }

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token'); 
    this.ngOnInit();
    window.location.reload ();
    this.router.navigate(['/core/auth/login'])

    } 

}
