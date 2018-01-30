import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNightfallComponent } from './current-nightfall.component';

describe('CurrentNightfallComponent', () => {
  let component: CurrentNightfallComponent;
  let fixture: ComponentFixture<CurrentNightfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentNightfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNightfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
