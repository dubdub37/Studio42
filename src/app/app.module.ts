import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubnavComponent } from './subnav/subnav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { Nav3Component } from './nav3/nav3.component';
import { Nav4Component } from './nav4/nav4.component';
import { AlertModule } from 'ngx-bootstrap';
import {CarouselModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { NgxSiemaModule } from 'ngx-siema';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ArtistsComponent } from './artists/artists.component';
import { Artist2Component } from './artist2/artist2.component';
import { TheshopComponent } from './theshop/theshop.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {GalleriaModule} from 'primeng/primeng';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavComponent,
    MainNavComponent,
    Nav3Component,
    Nav4Component,
    ArtistsComponent,
    Artist2Component,
    TheshopComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    NgxSiemaModule.forRoot(),
    Ng2CarouselamosModule,
    BrowserAnimationsModule,
    MdButtonModule,
    GalleriaModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
