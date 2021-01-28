import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { RestService } from './rest.service';
import { WhetherComponent } from './whether/whether.component';
import {APIService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    WhetherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
