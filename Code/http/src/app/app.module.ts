import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptorsService } from './auth-interceptors.service';
import { LoggingInterceptorsService } from './logging-interceptors.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorsService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:LoggingInterceptorsService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {}
