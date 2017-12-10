import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'frg-food-timeline',
  templateUrl: './food-timeline.component.html',
  styleUrls: ['./food-timeline.component.scss']
})
export class FoodTimelineComponent implements OnInit {
  now = moment();

  @Input() dluo: Moment;

  constructor() { }

  ngOnInit() {
  }

}

// https://stackoverflow.com/questions/36354325/angular-2-ngfor-using-numbers-instead-collections
