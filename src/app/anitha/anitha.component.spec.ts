import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnithaComponent } from './anitha.component';

describe('AnithaComponent', () => {
  let component: AnithaComponent;
  let fixture: ComponentFixture<AnithaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnithaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnithaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
