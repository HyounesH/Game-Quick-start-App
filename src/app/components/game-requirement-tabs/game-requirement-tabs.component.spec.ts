import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRequirementTabsComponent } from './game-requirement-tabs.component';

describe('GameRequirementTabsComponent', () => {
  let component: GameRequirementTabsComponent;
  let fixture: ComponentFixture<GameRequirementTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRequirementTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRequirementTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
