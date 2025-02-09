import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMenubarComponent } from './default-menubar.component';

describe('DefaultMenubarComponent', () => {
  let component: DefaultMenubarComponent;
  let fixture: ComponentFixture<DefaultMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultMenubarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
