import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Attributes, IntersectionObserverHooks, LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule} from 'ng-lazyload-image';
import {InsuranceDocumentComponent} from './components/insurance-document/insurance-document/insurance-document.component';
import {ErrorComponent} from './components/error/error/error.component';
import {InsuranceDocumentService} from "./services/insurance-document.service";
import {ActivatedRoute} from "@angular/router";

export class LazyLoadImageHooks extends IntersectionObserverHooks {

  override loadImage({imagePath}: Attributes): Promise<string> {
    return fetch(imagePath, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("t")
      },
    })
      .then((res) => res.blob())
      .then((blob) => URL.createObjectURL(blob));
  }
}

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
  providers: [{provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
