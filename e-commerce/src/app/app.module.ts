import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericApplicationListingComponent } from './generic-application-listing/generic-application-listing.component';
import { CartListingComponent } from './cart-listing/cart-listing.component';
import { DemoServiceService } from './demo-service.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenericApplicationListingComponent,
    CartListingComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
