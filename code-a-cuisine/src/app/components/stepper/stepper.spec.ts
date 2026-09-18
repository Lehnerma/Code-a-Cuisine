import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stepper } from './stepper';

describe('Stepper', () => {
  let component: Stepper;
  let fixture: ComponentFixture<Stepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stepper],
    }).compileComponents();

    fixture = TestBed.createComponent(Stepper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment respecting max', () => {
    fixture.componentRef.setInput('max', 2);
    component.value.set(2);
    component.increment();
    expect(component.value()).toBe(2);
  });

  it('should decrement respecting min', () => {
    fixture.componentRef.setInput('min', 1);
    component.value.set(1);
    component.decrement();
    expect(component.value()).toBe(1);
  });
});
