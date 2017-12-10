import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTimelineComponent } from './food-timeline.component';

describe('FoodTimelineComponent', () => {
  let component: FoodTimelineComponent;
  let fixture: ComponentFixture<FoodTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
