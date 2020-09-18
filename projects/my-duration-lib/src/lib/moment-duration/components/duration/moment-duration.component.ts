import {Component, Input, OnInit} from '@angular/core';
import {MomentDurationService} from "../../services/moment-duration.service";

@Component({
  selector: 'moment-duration',
  templateUrl: './moment-duration.component.html',
  styleUrls: ['./moment-duration.component.css']
})
export class MomentDurationComponent implements OnInit {

  private from: Date
  private to: Date;

  readableDuration: string

  constructor(private durationService: MomentDurationService) {
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
