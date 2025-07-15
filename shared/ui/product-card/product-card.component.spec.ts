import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers: [provideHttpClientTesting()]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name, description and price', () => {
    component.name = 'Test Product';
    component.description = 'A great product';
    component.price = 99.99;
    fixture.detectChanges();
    const name = fixture.nativeElement.querySelector('mat-card-title');
    const desc = fixture.nativeElement.querySelector('mat-card-content');
    expect(name.textContent).toContain('Test Product');
    expect(desc.textContent).toContain('A great product');
  });

  it('should emit buy event when buy button is clicked', () => {
    spyOn(component.buy, 'emit');
    component.name = 'Test Product';
    component.price = 99.99;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(component.buy.emit).toHaveBeenCalled();
  });
});
