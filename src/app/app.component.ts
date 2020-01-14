import { Component ,OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scheduleData:any[]=[];
  result;
  keys;
  constructor(private readonly restService : RestService) {
  }
  ngOnInit() {
  this.scheduleData = this.restService.getScheduleData(); 
  this.scheduleData.sort(this.GetSortOrder("date"));
  this.result =  this.scheduleData.reduce(function (r, a) {
    r[a.date] = r[a.date] || [];
    r[a.date].push(a);
    return r;
  }, Object.create(null));

  this.keys = Object.keys(this.result)
  for(let i = 0 ; i < this.keys.length; i++) {
    this.result[this.keys[i]].sort(this.GetSortOrder("time"))
  }
}

GetSortOrder(prop) {  
  return function(a, b) {  
      if (a[prop] > b[prop]) {  
          return 1;  
      } else if (a[prop] < b[prop]) {  
          return -1;  
      }  
      return 0;  
  } 
}


}
