import { Component } from '@angular/core';
import {
  EventSettingsModel,
  View,
  ViewsModel,
  Week,
  Month,
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-my-appointments',
  template: `<ejs-schedule
  height="220"
  width="750"
  [eventSettings]="eventObject"
  [selectedDate]="setDate"
  [currentView]="setView"
  [views]="views"
></ejs-schedule>`,
styleUrls: ['./my-appointments.component.css']
})

export class MyAppointmentsComponent {

  public setView: View = 'Week';
  public setDate: Date = new Date(2022, 6, 11);

  public views: ViewsModel[] = [
    { option: 'Week', allowVirtualScrolling: true, workDays: [1, 2, 3, 4, 5], startHour: '09:00', endHour: '17:00' },
    { option: 'Month', allowVirtualScrolling: true, workDays: [1, 2, 3, 4, 5], startHour: '09:00', endHour: '17:00' },
  ];

  public eventObject: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Harvestive Visit',
        StartTime: new Date(2022, 6, 11, 10, 30),  // Set the start time for the event to 10:00 AM
        EndTime: new Date(2022, 6, 11, 12, 30), // Set the end time for the event to 12:00 PM
      },
      {
        Id: 2,
        Subject: 'Harvestive Visit',
        StartTime: new Date(2022, 6, 13, 12, 30), 
        EndTime: new Date(2022, 6, 13, 14, 30),
      },
      {
        Id: 3,
        Subject: 'Harvestive Visit',
        StartTime: new Date(2022, 6, 16, 11, 0), 
        EndTime: new Date(2022, 6, 16, 12, 0),
      },
    ],
  };

}


