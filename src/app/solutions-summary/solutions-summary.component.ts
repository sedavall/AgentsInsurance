import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SolutionsummaryService } from '../service/solutionsummary.service';
import sol from '../../../db.json';

interface dataNew{
  id:number;
  LineHeading:string;
  LineofCoverageIssue:string;
  Solution:string;
  Total:number;
  } 
  interface newone{
    id: number;
    LineHeading: string;
    LineofCoverageIssue: string;
    Solution: string;
    Total: number;
    Saving: string;
  }
@Component({
  selector: 'app-solutions-summary',
  templateUrl: './solutions-summary.component.html',
  styleUrls: ['./solutions-summary.component.css']
})

export class SolutionsSummaryComponent {

  constructor(private solutionsummary:SolutionsummaryService){}

  SummaryData2:any={};
  SummaryData3:any={};
  SummaryData4:any={};
  SummaryData5:any={};
  SummaryData6:any={};
  
  total=0;
 
  item:dataNew[]=sol.issuesSolution
    item1:newone[]=sol.workersCompensation
  ngOnInit() {

    for (let index = 0; index < this.item.length; index++) {
    this.total=this.total+this.item[index].Total;
      
    }
    // for (let index = 0; index < this.item1.length; index++) {
    //   this.total=this.total+this.item1[index].Total;
        
    //   }

    // this.solutionsummary.getAllData().subscribe((AllData)=>
    
    // {
    //   console.log(AllData);
    //   this.SummaryData=AllData;
    //   for (let index = 0; index < this.SummaryData.length; index++) {
         
        
    //   }
     
    // })
    // this.solutionsummary.getAllData1().subscribe((AllData1)=>
    
    // {
    //   console.log(AllData1);
    //   this.SummaryData1=AllData1;
    // })
    this.solutionsummary.getAllData2().subscribe((AllData2)=>
    
    {
      console.log(AllData2);
      this.SummaryData2=AllData2;
    })
    this.solutionsummary.getAllData3().subscribe((AllData3)=>
    
    {
      console.log(AllData3);
      this.SummaryData3=AllData3;
    })
    this.solutionsummary.getAllData4().subscribe((AllData4)=>
    
    {
      console.log(AllData4);
      this.SummaryData4=AllData4;
    })
    this.solutionsummary.getAllData5().subscribe((AllData5)=>
    
    {
      console.log(AllData5);
      this.SummaryData5=AllData5;
    })
    this.solutionsummary.getAllData6().subscribe((AllData6)=>
    
    {
      console.log(AllData6);
      this.SummaryData6=AllData6;
    })

  }
  ProductLiability=new FormGroup({
    LineofCoverageissue:new FormControl(''),
    solution:new FormControl(''),
    Total:new FormControl(''),
    
  }

  )
 

  // SaveData() {
  //   this.solutionsummary.saveData(this.ProductLiability.value).subscribe((result) => {
  //     console.log(result);
     
  //     if (Array.isArray(result)) {
  //       this.SummaryData = result; // If result is an array
  //     } else {
  //       this.SummaryData = [result]; // Wrap the object in an array if it's an object
  //     }
  //   });
  // }

}

