import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycustomerComponent } from './mycustomer.component';

describe('MycustomerComponent', () => {
  let component: MycustomerComponent;
  let fixture: ComponentFixture<MycustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycustomerComponent]
    });
    fixture = TestBed.createComponent(MycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
