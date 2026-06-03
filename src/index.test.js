jest.mock('./calculator.js');

beforeEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(process, 'exit').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('should calculate and log result for valid arguments', () => {
  const { calculate } = require('./calculator.js');
  calculate.mockReturnValue(5);
  process.argv = ['node', 'script', '2', '+', '3'];
  require('./index.js');
  expect(calculate).toHaveBeenCalledWith('2', '+', '3');
  expect(console.log).toHaveBeenCalledWith(5);
  expect(process.exit).not.toHaveBeenCalled();
});

test('should log usage error and exit when too few arguments', () => {
  process.argv = ['node', 'script', '2', '+'];
  require('./index.js');
  expect(console.error).toHaveBeenCalledWith(
    'Usage: calculator <operand1> <operator> <operand2>'
  );
  expect(console.error).toHaveBeenCalledWith('Example: 2 + 3');
  expect(process.exit).toHaveBeenCalledWith(1);
});

test('should log usage error and exit when too many arguments', () => {
  process.argv = ['node', 'script', '2', '+', '3', '4'];
  require('./index.js');
  expect(console.error).toHaveBeenCalledWith(
    'Usage: calculator <operand1> <operator> <operand2>'
  );
  expect(console.error).toHaveBeenCalledWith('Example: 2 + 3');
  expect(process.exit).toHaveBeenCalledWith(1);
});

test('should log error message and exit when calculate throws', () => {
  const { calculate } = require('./calculator.js');
  calculate.mockImplementation(() => {
    throw new Error('Division by zero');
  });
  process.argv = ['node', 'script', '2', '/', '0'];
  require('./index.js');
  expect(console.error).toHaveBeenCalledWith('Division by zero');
  expect(process.exit).toHaveBeenCalledWith(1);
});