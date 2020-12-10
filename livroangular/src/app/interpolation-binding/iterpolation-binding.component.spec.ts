import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterpolationBindingComponent } from './iterpolation-binding.component';

describe('IterpolationBindingComponent', () => {
  let component: IterpolationBindingComponent;
  let fixture: ComponentFixture<IterpolationBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterpolationBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterpolationBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
