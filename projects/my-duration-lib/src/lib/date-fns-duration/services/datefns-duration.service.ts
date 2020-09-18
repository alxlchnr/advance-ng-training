import {Injectable} from '@angular/core';
import * as moment from "moment";
import {formatDuration, intervalToDuration} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class DatefnsDurationService {

  constructor() {
    moment.locale('de')
  }

  humanReadableDuration(from: Date, to: Date): string {
    return formatDuration(intervalToDuration({start:from,end:to}));
  }
}
