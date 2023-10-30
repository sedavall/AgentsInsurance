import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarvestiveComponent } from './harvestive/harvestive.component';
import { AboutUsiComponent } from './about-usi/about-usi.component';

const routes: Routes = [
  {path:'sales',component:SalesOverviewComponent},
  {path:'harvestive',component:HarvestiveComponent},
  {path:'new',component:AboutUsiComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
