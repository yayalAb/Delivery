import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:any=""
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');  
  }

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');  
    window.location.reload()
    this.router.navigate(['/core/auth/login'])

    } 

}
