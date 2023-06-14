import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdisplayComponent } from './appdisplay.component';

describe('AppdisplayComponent', () => {
  let component: AppdisplayComponent;
  let fixture: ComponentFixture<AppdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
