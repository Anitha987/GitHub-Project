import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnithaFormComponent } from './anitha-form.component';

describe('AnithaFormComponent', () => {
  let component: AnithaFormComponent;
  let fixture: ComponentFixture<AnithaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnithaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnithaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
