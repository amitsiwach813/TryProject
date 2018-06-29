import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ImageService} from './image.service';
import { LeftService} from './left.service';
import {RightService } from './right.service';
import { AppComponent } from './app.component';
import { HeaderimageComponent } from './headerimage/headerimage.component';
import { LeftpgComponent } from './leftpg/leftpg.component';
import { RightpgComponent } from './rightpg/rightpg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderimageComponent,
    LeftpgComponent,
    RightpgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImageService,LeftService,RightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
