module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'no-only-tests',
  ],
  rules: {
    'no-only-tests/no-only-tests': 'error',
  },
};
