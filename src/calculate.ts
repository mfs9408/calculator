import { Operator } from './components/CalcProvider/CalcProvider';

export default function calculate(a: number, b: number, operator: Operator): number {
  switch (operator) {
    case Operator.Plus:
      return a + b;
    case Operator.Minus:
      return b - a;
    case Operator.Multiple:
      return a * b;
    case Operator.Divide:
      return b / a;
    default:
      throw new Error('Не удалось определить математический оператор.');
  }
}
