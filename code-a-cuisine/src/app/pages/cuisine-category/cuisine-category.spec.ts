import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuisineCategory } from './cuisine-category';

describe('CuisineCategory', () => {
  let component: CuisineCategory;
  let fixture: ComponentFixture<CuisineCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisineCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(CuisineCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
