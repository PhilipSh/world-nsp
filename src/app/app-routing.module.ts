import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as cs from './components/index';


const routes: Routes = [
  {path: '', component: cs.NewsComponent},
  {path: 'news', component: cs.NewsComponent},
  {path: 'buy', component: cs.BuyProductsComponent},
  {path: 'partnership', component: cs.PartnershipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
