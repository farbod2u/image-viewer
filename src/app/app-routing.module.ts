import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InsuranceDocumentComponent} from "./components/insurance-document/insurance-document/insurance-document.component";
import {ErrorComponent} from "./components/error/error/error.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full', data: {currentUrl: 'main'}},
  {path: 'main/:filter/:t', component: InsuranceDocumentComponent},
  {path: 'error', component: ErrorComponent},
  {path: "**", redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
