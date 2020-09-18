import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MomentDurationComponent} from './components/duration/moment-duration.component';


@NgModule({
  declarations: [MomentDurationComponent],
  imports: [
    CommonModule
  ],
  exports: [MomentDurationComponent]
})
export class MomentDurationModule {

}
