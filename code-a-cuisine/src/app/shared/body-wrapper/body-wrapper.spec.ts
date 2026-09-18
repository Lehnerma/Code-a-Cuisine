import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyWrapper } from './body-wrapper';

describe('BodyWrapper', () => {
  let component: BodyWrapper;
  let fixture: ComponentFixture<BodyWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
