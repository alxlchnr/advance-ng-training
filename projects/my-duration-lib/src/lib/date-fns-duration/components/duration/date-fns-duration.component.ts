import {Component, Input, OnInit} from '@angular/core';
import {DatefnsDurationService} from "../../services/datefns-duration.service";

@Component({
  selector: 'datefns-duration',
  templateUrl: './date-fns-duration.component.html',
  styleUrls: ['./date-fns-duration.component.css']
})
export class DateFnsDurationComponent implements OnInit {

  private from: Date
  private to: Date;

  readableDuration: string

  constructor(private durationService: DatefnsDurationService) {
  }

  @Input()
  set start(newDate: Date) {
    this.from = newDate;
    this.calculateReadableDuraction();
  }

  @Input()
  set end(newDate: Date) {
    this.to = newDate
    this.calculateReadableDuraction();
  }

  calculateReadableDuraction() {
    if (this.from && this.to) {
      this.readableDuration = this.durationService.humanReadableDuration(this.from, this.to)
    } else {
      this.readableDuration = null;
    }
  }

  ngOnInit(): void {
  }

}
