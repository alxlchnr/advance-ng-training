import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateFnsDurationComponent} from "./components/duration/date-fns-duration.component";



@NgModule({
  declarations: [DateFnsDurationComponent],
  imports: [
    CommonModule
  ],
  exports:[DateFnsDurationComponent]
})
export class DateFnsDurationModule { }
