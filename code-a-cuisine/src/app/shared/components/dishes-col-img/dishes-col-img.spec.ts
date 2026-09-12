import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishesColImg } from './dishes-col-img';

describe('DishesColImg', () => {
  let component: DishesColImg;
  let fixture: ComponentFixture<DishesColImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishesColImg],
    }).compileComponents();

    fixture = TestBed.createComponent(DishesColImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
