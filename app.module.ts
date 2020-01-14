import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import {ProducttabComponent} from './product/prducttab.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service';

@NgModule({
  declarations: [
    AppComponent,ProducttabComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
