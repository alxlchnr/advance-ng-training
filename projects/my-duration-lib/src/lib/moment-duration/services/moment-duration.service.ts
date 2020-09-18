import {Injectable} from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class MomentDurationService {

  constructor() {
    moment.locale('de')
  }

  humanReadableDuration(from: Date, to: Date): string {
    return moment.duration({from, to}).humanize();
  }
}
