import { EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  user:any;

  @Output()
   logou= new EventEmitter<any>();

  ngOnInit(): void {
    //this.id = localStorage.getItem('token');  
  }

  logout() {   
    this.logou.emit(); 
    } 
}
