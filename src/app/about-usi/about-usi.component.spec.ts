import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsiComponent } from './about-usi.component';

describe('AboutUsiComponent', () => {
  let component: AboutUsiComponent;
  let fixture: ComponentFixture<AboutUsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsiComponent]
    });
    fixture = TestBed.createComponent(AboutUsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
