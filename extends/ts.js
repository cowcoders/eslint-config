module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ]
  }
};
