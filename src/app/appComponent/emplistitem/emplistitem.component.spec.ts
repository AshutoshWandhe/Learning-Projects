import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistitemComponent } from './emplistitem.component';

describe('EmplistitemComponent', () => {
  let component: EmplistitemComponent;
  let fixture: ComponentFixture<EmplistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
