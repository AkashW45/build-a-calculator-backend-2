import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

describe('Calculator', () => {
  describe('Addition', () => {
    it('should add two positive numbers', () => {
      assert.strictEqual(calculate('2', '+', '3'), 5);
    });
    it('should add a negative and positive number', () => {
      assert.strictEqual(calculate('-1', '+', '4'), 3);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two numbers', () => {
      assert.strictEqual(calculate('10', '-', '3'), 7);
    });
    it('should handle negative result', () => {
      assert.strictEqual(calculate('3', '-', '10'), -7);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two numbers', () => {
      assert.strictEqual(calculate('4', '*', '5'), 20);
    });
    it('should multiply by zero', () => {
      assert.strictEqual(calculate('0', '*', '100'), 0);
    });
  });

  describe('Division', () => {
    it('should divide two positive numbers', () => {
      assert.strictEqual(calculate('10', '/', '2'), 5);
    });
    it('should handle decimal results', () => {
      assert.strictEqual(calculate('7', '/', '2'), 3.5);
    });
    it('should throw error on division by zero', () => {
      assert.throws(() => calculate('5', '/', '0'), /Division by zero/);
    });
  });

  describe('Error handling', () => {
    it('should throw error for invalid operand', () => {
      assert.throws(() => calculate('abc', '+', '3'), /Invalid operand/);
    });
    it('should throw error for unknown operator', () => {
      assert.throws(() => calculate('2', '^', '3'), /Unknown operator/);
    });
  });
});
