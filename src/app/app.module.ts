import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleProvider } from './schedule.provider';

export function scheduleProviderFactory(provider: ScheduleProvider) {
  return () => provider.loadSchedule();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ScheduleProvider,{provide: APP_INITIALIZER, useFactory: scheduleProviderFactory, deps: [ScheduleProvider], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
