import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { FoodItem } from '../models/food-item';

@Component({
  selector: 'frg-food-timeline',
  templateUrl: './food-timeline.component.html',
  styleUrls: ['./food-timeline.component.scss']
})
export class FoodTimelineComponent implements OnInit {
  now = moment().startOf('day');
  private _foodItem: FoodItem;

  range = 0;

  @Input() set food (food: FoodItem){
    this._foodItem = food;
    this.range = food.dluo.diff(this.now, 'day');
  }
  get food () {
    return this._foodItem;
  }

  constructor() { }

  ngOnInit() {
  }

}
