import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoennRegionComponent } from './gym-hoenn';

describe('HoennRegionComponent', () => {
  let component: HoennRegionComponent;
  let fixture: ComponentFixture<HoennRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennRegionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HoennRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 8 Hoenn gym leaders', () => {
    expect(component.gymLeaders().length).toBe(8);
  });
});
