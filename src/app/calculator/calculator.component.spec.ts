import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    });

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should append the expression', () => {
    component.appendExpression('1');
    component.appendExpression('+');
    component.appendExpression('2');
    expect(component.expression).toBe('1+2');
  });

  it('should evaluate the expression', () => {
    component.expression = '1+2';
    component.evaluateExpression();
    expect(component.expression).toBe('3');
  });
});

