import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoodTimelineComponent } from './food-timeline/food-timeline.component';
import { DayPipe } from './day.pipe';
import { FrgRepeatDirective } from './frg-repeat.directive';


@NgModule({
  declarations: [
    AppComponent,
    FoodTimelineComponent,
    DayPipe,
    FrgRepeatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
