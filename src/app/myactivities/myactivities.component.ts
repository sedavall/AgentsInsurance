// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-my-activities',
//   templateUrl: './my-activities.component.html',
//   styleUrls: ['./my-activities.component.css']
// })
// export class MyActivitiesComponent {
//   activities = [
//     {
//       companyName: 'Harvestive',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$1000',
//       actions: ['Action 1', 'Action 2', 'Action 3']
//     },
//     {
//       companyName: 'Xyz',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$800',
//       actions: ['Action 1', 'Action 2','Action 3']
//     },

//     {
//       companyName: 'Company A',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$1000',
//       actions: ['Action 1', 'Action 2', 'Action 3']
//     },
//     {
//       companyName: 'Company B',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$800',
//       actions: ['Action 1', 'Action 2','Action 3']
//     }
//     ,

//     {
//       companyName: 'Company A',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$1000',
//       actions: ['Action 1', 'Action 2', 'Action 3']
//     },
//     {
//       companyName: 'Company B',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$800',
//       actions: ['Action 1', 'Action 2','Action 3']
//     } ,

//     {
//       companyName: 'Company A',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$1000',
//       actions: ['Action 1', 'Action 2', 'Action 3']
//     },
//     {
//       companyName: 'Company B',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$800',
//       actions: ['Action 1', 'Action 2','Action 3']
//     } ,

//     {
//       companyName: 'Company A',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$1000',
//       actions: ['Action 1', 'Action 2', 'Action 3']
//     },
//     {
//       companyName: 'Company B',
//       smalldetail:'Argo Industry',
//       details: 'Lorem ipsum dolor sit amet',
//       amount: '$800',
//       actions: ['Action 1', 'Action 2','Action 3']
//     }
//     // Add more activity data here
//   ];
// }



import { Component } from '@angular/core';

// Define a custom interface to specify the types of activity objects
interface Activity {
  companyName: string;
  smalldetail: string;
  details: string;
  amount: string;
  actions: string[];
}

@Component({
  selector: 'app-myactivities',
  templateUrl: './myactivities.component.html',
  styleUrls: ['./myactivities.component.css']
})
export class MyActivitiesComponent {
  activities: Activity[] = [
    {
      companyName: 'Harvestive',
      smalldetail: 'Argo Industry',
      details: 'Lorem ipsum dolor sit amet',
      amount: '$1000',
      actions: ['Action 1', 'Action 2', 'Action 3']
    },
    {
      companyName: 'Xyz',
      smalldetail: 'Argo Industry',
      details: 'Lorem ipsum dolor sit amet',
      amount: '$800',
      actions: ['Action 1', 'Action 2', 'Action 3']
    },
    {
      companyName: 'Harvestive',
      smalldetail: 'Argo Industry',
      details: 'Lorem ipsum dolor sit amet',
      amount: '$1000',
      actions: ['Action 1', 'Action 2', 'Action 3']
    },
    {
      companyName: 'Xyz',
      smalldetail: 'Argo Industry',
      details: 'Lorem ipsum dolor sit amet',
      amount: '$800',
      actions: ['Action 1', 'Action 2', 'Action 3']
    },
    {
      companyName: 'Harvestive',
      smalldetail: 'Argo Industry',
      details: 'Lorem ipsum dolor sit amet',
      amount: '$1000',
      actions: ['Action 1', 'Action 2', 'Action 3']
    },
    {
      companyName: 'Xyz',
      smalldetail: 'Argo Industry',
      details: 'Lorem ipsum dolor sit amet',
      amount: '$800',
      actions: ['Action 1', 'Action 2', 'Action 3']
    },

    // Your additional activity data goes here...
  ];

  sort(column: keyof Activity, order: string) {
    this.activities.sort((a, b) => {
      return order === 'asc' ? (a[column] > b[column] ? 1 : -1) : (a[column] < b[column] ? 1 : -1);
    });
  }
}
