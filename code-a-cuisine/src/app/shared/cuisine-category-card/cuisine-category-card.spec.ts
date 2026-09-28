import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuisineCategoryCard } from './cuisine-category-card';

describe('CuisineCategoryCard', () => {
  let component: CuisineCategoryCard;
  let fixture: ComponentFixture<CuisineCategoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisineCategoryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CuisineCategoryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
