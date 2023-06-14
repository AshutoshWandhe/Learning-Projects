import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreatecomponentComponent } from './empcreatecomponent.component';

describe('EmpcreatecomponentComponent', () => {
  let component: EmpcreatecomponentComponent;
  let fixture: ComponentFixture<EmpcreatecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreatecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpcreatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
