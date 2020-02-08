import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAuguryComponent } from './angular-augury.component';

describe('AngularAuguryComponent', () => {
  let component: AngularAuguryComponent;
  let fixture: ComponentFixture<AngularAuguryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAuguryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAuguryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
