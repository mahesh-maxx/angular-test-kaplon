import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable() 

export class ScheduleProvider {
    private schedule:any[];
    private channelUrl:string = 'assets/channel.json';

    constructor(private readonly http:HttpClient){
    }

    public getSchedule():any[] {
        return this.schedule;
    }

    loadSchedule() {
        return new Promise((resolve, reject) => {
            this.http.get(this.channelUrl).subscribe((data:any[])=>{
                this.schedule = data;
                resolve(true);
            })
        })
    }
}