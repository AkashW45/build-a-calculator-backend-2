import { calculate } from './calculator.js';

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Usage: calculator <operand1> <operator> <operand2>');
  console.error('Example: 2 + 3');
  process.exit(1);
}

const [leftStr, operator, rightStr] = args;

try {
  const result = calculate(leftStr, operator, rightStr);
  console.log(result);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
