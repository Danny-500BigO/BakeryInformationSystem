import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryDashBoardComponent } from './bakery-dash-board.component';

describe('BakeryDashBoardComponent', () => {
  let component: BakeryDashBoardComponent;
  let fixture: ComponentFixture<BakeryDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
