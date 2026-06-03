import { calculate } from './calculator';

describe('calculate', () => {
  // Happy path
  it('should add two numbers', () => {
    expect(calculate('5', '+', '3')).toBe(8);
  });

  it('should subtract two numbers', () => {
    expect(calculate('5', '-', '3')).toBe(2);
  });

  it('should multiply two numbers', () => {
    expect(calculate('5', '*', '3')).toBe(15);
  });

  it('should divide two numbers', () => {
    expect(calculate('6', '/', '3')).toBe(2);
  });

  // Edge cases
  it('should handle negative numbers', () => {
    expect(calculate('-5', '+', '3')).toBe(-2);
    expect(calculate('5', '-', '-3')).toBe(8);
  });

  it('should handle decimal numbers', () => {
    expect(calculate('0.1', '+', '0.2')).toBeCloseTo(0.3);
    expect(calculate('3', '/', '2')).toBe(1.5);
  });

  it('should handle numbers as strings with whitespace', () => {
    expect(calculate(' 5 ', '+', ' 3 ')).toBe(8);
    expect(calculate('\t10', '/', '\n2')).toBe(5);
  });

  // Error paths
  it('should throw for non-numeric operands', () => {
    expect(() => calculate('abc', '+', '3'))
      .toThrow('Invalid operand(s). Both operands must be numbers.');
    expect(() => calculate('3', '-', 'xyz'))
      .toThrow('Invalid operand(s). Both operands must be numbers.');
  });

  it('should throw for division by zero', () => {
    expect(() => calculate('5', '/', '0'))
      .toThrow('Division by zero is not allowed.');
    expect(() => calculate('0', '/', '0'))
      .toThrow('Division by zero is not allowed.');
  });

  it('should throw for an unknown operator', () => {
    expect(() => calculate('5', '%', '3'))
      .toThrow("Unknown operator '%'. Allowed operators: +, -, *, /");
  });
});