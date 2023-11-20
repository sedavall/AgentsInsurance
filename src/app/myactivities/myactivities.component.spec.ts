import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyactivitiesComponent } from './myactivities.component';

describe('MyactivitiesComponent', () => {
  let component: MyactivitiesComponent;
  let fixture: ComponentFixture<MyactivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyactivitiesComponent]
    });
    fixture = TestBed.createComponent(MyactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
