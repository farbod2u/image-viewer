import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LazyLoadImageModule} from 'ng-lazyload-image';
import { InsuranceDocumentComponent } from './components/insurance-document/insurance-document/insurance-document.component';
import { ErrorComponent } from './components/error/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceDocumentComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
