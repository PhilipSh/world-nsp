import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import * as cs from './components/index';


const routes: Routes = [
  {path: '', component: cs.MainComponent},
  {path: 'news', component: cs.NewsComponent},
  {path: 'buy', component: cs.BuyProductsComponent},
  {path: 'partnership', component: cs.PartnershipComponent},
  {path: 'company-history', component: cs.CompanyHistoryComponent},
  {path: 'quality-control', component: cs.QualityControlComponent},
  {path: 'certificates', component: cs.CertificatesComponent},
];

const routerOptions: ExtraOptions= {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
