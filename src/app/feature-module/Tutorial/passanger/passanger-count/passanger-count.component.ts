import { Component, Input, OnInit } from '@angular/core';
import { Passanger } from '../../tutorial/tutorial/tutorial.component';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.css']
})
export class PassangerCountComponent implements OnInit {
  @Input()
  detail!:Passanger[];

  constructor() { }

  ngOnInit(): void {
  }

}
