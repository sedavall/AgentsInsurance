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
import { MyActivitiesComponent } from './myactivities/myactivities.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MyActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ChartModule,
    MatTabsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
