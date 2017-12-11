import { Component } from '@angular/core';
import * as moment from 'moment';

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

  list= [{ dluo:  moment('30/12/17', 'DD/MM/YY')
  }, {dluo:  moment('16/12/17', 'DD/MM/YY')
  }, {dluo:  moment('15/12/17', 'DD/MM/YY')
  }, {dluo:  moment('3/12/18', 'DD/MM/YY')
  }, {dluo:  moment('6/1/18', 'DD/MM/YY')
  }, {dluo:  moment('30/12/17', 'DD/MM/YY')
  }, {dluo:  moment('20/12/17', 'DD/MM/YY')
  }, {dluo:  moment('25/12/17', 'DD/MM/YY')
  }];
}
