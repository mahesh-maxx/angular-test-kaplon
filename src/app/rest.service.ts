import { Injectable } from '@angular/core';
import { ScheduleProvider } from './schedule.provider';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  scheduleData:any[]=[]
  constructor(private scheduleProvider:ScheduleProvider) { 
    this.scheduleData = this.scheduleProvider.getSchedule();
    this.scheduleData.map(function(ele) {
      var dateCon = new Date(ele.time)
      var date = dateCon.toLocaleDateString();
      var time = dateCon.toLocaleTimeString();
      ele["scheduleTime"] = time;
      ele["date"] = date;
  })
  }

  getScheduleData() {
    return this.scheduleData.slice();
  }
}
