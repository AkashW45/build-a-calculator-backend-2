/**
 * Performs arithmetic on two operands with the given operator.
 * Supports +, -, *, /.
 * @param {string} leftStr - First operand as string
 * @param {string} operator - Arithmetic operator ('+', '-', '*', '/')
 * @param {string} rightStr - Second operand as string
 * @returns {number} Result of the operation
 * @throws {Error} If operator is invalid or division by zero
 */
export function calculate(leftStr, operator, rightStr) {
  const left = Number(leftStr);
  const right = Number(rightStr);

  if (isNaN(left) || isNaN(right)) {
    throw new Error('Invalid operand(s). Both operands must be numbers.');
  }

  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      if (right === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return left / right;
    default:
      throw new Error(`Unknown operator '${operator}'. Allowed operators: +, -, *, /`);
  }
}
