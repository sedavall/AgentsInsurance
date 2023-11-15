import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionsummaryService {

  url='http://localhost:3000/';


 
    constructor(private http:HttpClient) { }
    saveData(data:any){
      console.log(data);
      return this.http.post(this.url+'issuesSolutions',data);
    }
    getAllData()
    {
      return this.http.get(this.url);
    }
    getAllData1()
    {
      return this.http.get(this.url+'workersCompensation');
    }
    getAllData2()
    {
      return this.http.get(this.url+'Property');
    }
    getAllData3()
    {
      return this.http.get(this.url+'AutoLiability');
    }
    getAllData4()
    {
      return this.http.get(this.url+'international&speciality');
    }
    getAllData5()
    {
      return this.http.get(this.url+"UmbrellaExcess");
    }
    getAllData6()
    {
      return this.http.get(this.url+'ClaimsRiskControl');
    }
    
}
