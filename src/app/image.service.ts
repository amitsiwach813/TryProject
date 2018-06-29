import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

ipath=['assets/haramiCat.jpg','assets/bigCat.jpg','assets/firyCat.jpg','assets/showoffCat.jfif'];
itext=['Harimi Cat','Big Cat','Dangerous Cat','Show-off Cat'];
  constructor() { }

  getText(){
  return "Quick Access";
  }

}
