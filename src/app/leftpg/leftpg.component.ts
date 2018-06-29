import { Component, OnInit } from '@angular/core';
import { LeftService} from '../left.service';

@Component({
  selector: 'app-leftpg',
  templateUrl: './leftpg.component.html',
  styleUrls: ['./leftpg.component.css']
})
export class LeftpgComponent {


role1={
		image:"",
		text:"",
		text1:"",
		button1:""
	};
	role2={
		image:"",
		text:"",
		text1:"",
		button1:""
	};
role3={
		image:"",
		text:"",
		text1:"",
		button1:""
	};
  constructor(private ob:LeftService) { }

  ngOnInit() {
  	// this.pgl=this.ob.pgl1;
  	this.role1.image=this.ob.role1.image;
  	this.role1.text=this.ob.role1.tex;
  	this.role1.text1=this.ob.role1.text1;
  	this.role1.button1=this.ob.role1.button1;
  	this.role2.image=this.ob.role2.image;
  	this.role2.text=this.ob.role2.tex;
  	this.role2.text1=this.ob.role2.text1;
  	this.role2.button1=this.ob.role2.button1;
  	this.role3.image=this.ob.role3.image;
  	this.role3.text=this.ob.role3.tex;
  	this.role3.text1=this.ob.role3.text1;
  	this.role3.button1=this.ob.role3.button1;
  }

}
