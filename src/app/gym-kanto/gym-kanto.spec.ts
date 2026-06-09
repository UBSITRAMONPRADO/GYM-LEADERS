import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KantoRegionComponent } from './gym-kanto';


describe('KantoComponent', () => {
  let component: KantoRegionComponent;
  let fixture: ComponentFixture<KantoRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoRegionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KantoRegionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});