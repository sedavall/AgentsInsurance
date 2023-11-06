import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarvestiveComponent } from './harvestive/harvestive.component';
import { AboutUsiComponent } from './about-usi/about-usi.component';
import { ExpertsComponent } from './experts/experts.component';
<<<<<<< HEAD
import { MyActivitiesComponent } from './myactivities/myactivities.component';
=======
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
>>>>>>> 1cb103d836a2906f0c678b42580e950ba66fe3b5

const routes: Routes = [
  {path:'sales',component:SalesOverviewComponent},
  {path:'harvestive',component:HarvestiveComponent},
  {path:'new',component:AboutUsiComponent},
  {path:'Expert',component:ExpertsComponent},
<<<<<<< HEAD
  {path:'MyActivities',component:MyActivitiesComponent},

=======
  {
    path:'myAppointments',component:MyAppointmentsComponent
  },
>>>>>>> 1cb103d836a2906f0c678b42580e950ba66fe3b5


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
