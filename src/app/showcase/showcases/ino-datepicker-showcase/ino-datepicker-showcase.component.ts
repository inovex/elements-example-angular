import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-ino-datepicker-showcase',
  templateUrl: './ino-datepicker-showcase.component.html',
  styleUrls: ['./ino-datepicker-showcase.component.scss']
})
export class InoDatepickerShowcaseComponent {
  days = 5;
  defaultDate = moment().format('YYYY-MM-DD');
  minDate = moment().subtract(this.days, 'days').format('YYYY-MM-DD');
  maxDate = moment().add(this.days, 'days').format('YYYY-MM-DD');

}
