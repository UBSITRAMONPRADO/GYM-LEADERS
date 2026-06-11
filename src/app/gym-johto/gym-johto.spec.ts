import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohtoRegionComponent } from './gym-johto';

describe('G', () => {
  let component: JohtoRegionComponent;
  let fixture: ComponentFixture<JohtoRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoRegionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JohtoRegionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
