import { NgModule } from '@angular/core';
import {MomentDurationModule} from "./moment-duration/moment-duration.module";
import {DateFnsDurationModule} from "./date-fns-duration/date-fns-duration.module";



@NgModule({
  declarations: [],
  imports: [
    MomentDurationModule,
    DateFnsDurationModule
  ],
  exports: [MomentDurationModule,DateFnsDurationModule]
})
export class MyDurationLibModule { }
