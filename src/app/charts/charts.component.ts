import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  chart: any;
  data={
    labels:['Total','Sold'],
    datasets:[{
      data:[ 2,1],
      backgroundColor:['rgb(32,82,41)','rgb(124,166,132)'],
    }]
  };
 
  
  constructor() { }
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
    const ctx=document.getElementById('myChart1') as HTMLCanvasElement;
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
