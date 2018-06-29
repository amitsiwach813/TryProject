import { Component, OnInit } from '@angular/core';
import { ImageService} from '../image.service';
@Component({
  selector: 'app-headerimage',
  templateUrl: './headerimage.component.html',
  styleUrls: ['./headerimage.component.css']
})
export class HeaderimageComponent{
	data;
	imagep=[];
	imaget=[];
  constructor(private imageservice: ImageService) { }

  ngOnInit() {
  	this.imagep=this.imageservice.ipath;
  	this.imaget=this.imageservice.itext;
  	this.data=this.imageservice.getText();
  }

}
