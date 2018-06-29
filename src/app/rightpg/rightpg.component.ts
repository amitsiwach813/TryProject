import { Component, OnInit } from '@angular/core';
import {RightService } from '../right.service';
@Component({
  selector: 'app-rightpg',
  templateUrl: './rightpg.component.html',
  styleUrls: ['./rightpg.component.css']
})
export class RightpgComponent {
	value=[];

  constructor(private ob:RightService) { }

  ngOnInit() {
  	this.value=this.ob.value;
  }

}
