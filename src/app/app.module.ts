import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { ChartModule } from 'angular-highcharts';
import { HarvestiveComponent } from './harvestive/harvestive.component';
import { AboutUsiComponent } from './about-usi/about-usi.component';
import { ChartsComponent } from './charts/charts.component';
import { ExpertsComponent } from './experts/experts.component';
import {MatTabsModule} from '@angular/material/tabs';
<<<<<<< HEAD
import { MyActivitiesComponent } from './myactivities/myactivities.component';
=======

import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
>>>>>>> 1cb103d836a2906f0c678b42580e950ba66fe3b5
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, DragAndDropService, ResizeService, WorkHoursModel} from '@syncfusion/ej2-angular-schedule';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SalesOverviewComponent,
    HarvestiveComponent,
    AboutUsiComponent,
    ChartsComponent,
    ExpertsComponent,
<<<<<<< HEAD
    MyActivitiesComponent
=======
    MyAppointmentsComponent,
   
>>>>>>> 1cb103d836a2906f0c678b42580e950ba66fe3b5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ChartModule,
    MatTabsModule,
    ScheduleModule, RecurrenceEditorModule,
    
    
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, DragAndDropService, ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
