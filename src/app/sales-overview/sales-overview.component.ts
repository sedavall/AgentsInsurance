import {Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
 
@Component({
  selector: 'app-sales-overview',
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.css']
})
export class SalesOverviewComponent {
 
  chart: any;
  data={
    labels:['Total','Sold', 'InProposal', 'Qualification'],
    datasets:[{
      data:[ 2,2,4,0],
      backgroundColor:['orange','green','blue','violet'],
    }]
  };
  constructor() { }
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
    const ctx=document.getElementById('myChart') as HTMLCanvasElement; 
      this.chart=new Chart(ctx,{
        type:'doughnut',
        data: this.data,
        options: {
          cutout: '70%',
          plugins:{
            legend:{
              display: false
            },
           
            datalabels:{
              color:'black',
              formatter: (value, ctx) =>{
                const label= this.data.labels[ctx.dataIndex];
                return '${label}: ${value}';
              },
              font:{
                weight:'bold',
                size:12,
               },
             }
            }
            }    
           }); 
          }
        }

