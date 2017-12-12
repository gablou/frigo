import { Component } from '@angular/core';
import * as moment from 'moment';
import { FoodItem } from './models/food-item';

@Component({
  selector: 'frg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  now = moment().startOf('day');
  max = moment('30/12/17', 'DD/MM/YY');

  range = this.max.diff(this.now, 'day');

  constructor() {
  }

  list: FoodItem[] = [
  {name: 'cordon bleu*2', count: 6, dluo:  moment('23/12/17', 'DD/MM/YY')
  }, {name: 'cordon savoyard*2', count: 3, dluo:  moment('16/12/17', 'DD/MM/YY')
  }, {name: 'jambon *4', count: 3, dluo:  moment('21/12/17', 'DD/MM/YY')
  }, {name: 'soja framb passion', count: 4, dluo:  moment('22/12/17', 'DD/MM/YY')
  }, {name: 'soja myrtille', count: 4, dluo:  moment('30/12/17', 'DD/MM/YY')
  }, {name: 'coppa *10', count: 2, dluo:  moment('16/2/18', 'DD/MM/YY')
  }, {name: 'coppa *10', count: 1, dluo:  moment('13/02/18', 'DD/MM/YY')
  }, {name: 'jambon cru *6', count: 2, dluo:  moment('04/02/18', 'DD/MM/YY')
  }];
}
