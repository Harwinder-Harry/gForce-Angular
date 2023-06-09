import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopViewComponent } from './workshop-view.component';

describe('WorkshopViewComponent', () => {
  let component: WorkshopViewComponent;
  let fixture: ComponentFixture<WorkshopViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
