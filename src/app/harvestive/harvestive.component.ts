import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
 
@Component({
  selector: 'app-harvestive',
  templateUrl: './harvestive.component.html',
  styleUrls: ['./harvestive.component.css']
})
export class HarvestiveComponent {
  chart: any;
  data={
    labels:['Total','Sold'],
    datasets:[{
      data:[ 2,2],
      backgroundColor:['blue','orange'],
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
