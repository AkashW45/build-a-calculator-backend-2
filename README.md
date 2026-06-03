# Calculator CLI

A simple command-line calculator for basic arithmetic operations (add, subtract, multiply, divide).

## Usage

```
node src/index.js <operand1> <operator> <operand2>
```

**Examples:**

```
$ node src/index.js 2 + 3
5

$ node src/index.js 10 - 4
6

$ node src/index.js 7 '*' 3
21

$ node src/index.js 20 / 4
5
```

> Note: The `*` operator must be quoted or escaped in most shells to avoid glob expansion.

## Supported Operators

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division

## Error Handling

- Invalid operands (non-numeric) produce an error message.
- Division by zero returns an error.
- Unknown operators are rejected.

## Development

### Prerequisites
- Node.js 18 or later

### Running Tests

```
npm test
```

### Project Structure

```
.
├── package.json
├── README.md
├── src/
│   ├── index.js        # CLI entry point
│   └── calculator.js   # Arithmetic logic
└── test/
    └── calculator.test.js  # Unit tests
```
