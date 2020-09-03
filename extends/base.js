module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'no-only-tests'
  ],
  rules: {
    'no-only-tests/no-only-tests': 'error',
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': 'error',
    'curly': [
      2,
      'all'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-multi-spaces': 'error',
    'comma-dangle': 'error',
    'no-var': 'error'
  }
};
