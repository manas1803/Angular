import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicDirectiveDirective } from './basic-directive/basic-directive.directive';
import { BetterDirectiveDirective } from './better-directive/better-directive.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirectiveDirective,
    BetterDirectiveDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
