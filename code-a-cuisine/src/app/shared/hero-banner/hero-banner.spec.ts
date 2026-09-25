import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroBanner } from './hero-banner';

describe('HeroBanner', () => {
  let fixture: ComponentFixture<HeroBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HeroBanner] }).compileComponents();
    fixture = TestBed.createComponent(HeroBanner);
    fixture.componentRef.setInput('heading', 'Ingredients');
    await fixture.whenStable();
  });

  it('renders the heading', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Ingredients');
  });

  it('switches decoration by variant', async () => {
    fixture.componentRef.setInput('variant', 'directions');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.hero__art--bottle')).toBeTruthy();
  });
});
