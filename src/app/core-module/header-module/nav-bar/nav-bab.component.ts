import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bab.component.html',
  styleUrls: ['./nav-bab.component.css']
})
export class NavBabComponent implements OnInit {
   id:any=""
  constructor() { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');  
  }

}
