import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarvestiveComponent } from './harvestive/harvestive.component';
import { AboutUsiComponent } from './about-usi/about-usi.component';
import { ExpertsComponent } from './experts/experts.component';
import { MyActivitiesComponent } from './myactivities/myactivities.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { NewsComponent } from './news/news.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MycustomerComponent } from './mycustomer/mycustomer.component';

const routes: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'sales',component:SalesOverviewComponent},
  {path:'harvestive',component:HarvestiveComponent},
  {path:'new',component:AboutUsiComponent},
  {path:'Expert',component:ExpertsComponent},
  {path:'aboutusi',component:AboutUsiComponent},
  {path:'MyActivities',component:MyActivitiesComponent},
  {path:'news',component:NewsComponent},
  {path:'mainPage',component:MainPageComponent},
  {path:'customer',component:MycustomerComponent},

  {path:'myAppointments',component:MyAppointmentsComponent},
 
  // {path:'dashboard',component:},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
