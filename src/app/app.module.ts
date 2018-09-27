import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DescriptionComponent } from './description/description.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutComponent } from './about/about.component';
import { CommunicationsComponent } from './communications/communications.component';

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	ProductsComponent,
  	  	DescriptionComponent,
  	  	DeliveryComponent,
  	  	AboutComponent,
  	  	CommunicationsComponent
  	],
  	imports: [
    	BrowserModule,
    	ReactiveFormsModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
