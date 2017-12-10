import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: Moment, args?: any): string {
    return value.format('DD/MM/YY');
  }

}
