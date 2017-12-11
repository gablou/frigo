import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'frg-food-timeline',
  templateUrl: './food-timeline.component.html',
  styleUrls: ['./food-timeline.component.scss']
})
export class FoodTimelineComponent implements OnInit {
  now = moment().startOf('day');
  private _dluo: Moment;

  range = 0;

  @Input() set dluo (date: Moment){
    this._dluo = date;
    this.range = date.diff(this.now, 'day');
  }
  get dluo () {
    return this._dluo;
  }

  constructor() { }

  ngOnInit() {
  }

}
