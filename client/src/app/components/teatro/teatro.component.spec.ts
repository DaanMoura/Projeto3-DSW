import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatroComponent } from './teatro.component';

describe('TeatroComponent', () => {
  let component: TeatroComponent;
  let fixture: ComponentFixture<TeatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
