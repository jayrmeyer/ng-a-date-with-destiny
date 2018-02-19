import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMilestonesComponent } from './public-milestones.component';

describe('PublicMilestonesComponent', () => {
  let component: PublicMilestonesComponent;
  let fixture: ComponentFixture<PublicMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
