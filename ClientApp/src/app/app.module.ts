import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51KYAK5CjaVImKg1qOxArglL5eSddRgsex6Nns8P9nH6iUoXcdjZxVJN0QQfI3GZG4WQMmELlBpkmeGtJU10WQP6g00F5fsVQfa'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
