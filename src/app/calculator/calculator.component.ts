import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression: string = '';

  appendExpression(value: string) {
    this.expression += value;
  }

  evaluateExpression() {
    this.expression = eval(this.expression);
  }
}
