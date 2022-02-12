module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'no-only-tests'
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': 'error',
    'curly': ['error', 'all'],
    'indent': ['error', 2, { 'SwitchCase': 1, 'ignoredNodes': ['JSXAttribute'], 'MemberExpression': 1 }],
    'key-spacing': ['error', { 'beforeColon': false }],
    'keyword-spacing': ['error'],
    'no-extra-semi': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-only-tests/no-only-tests': 'error',
    'no-spaced-func': 'error',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { 'int32Hint': false }]
  }
};
