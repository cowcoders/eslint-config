module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        'beforeSelfClosing': 'never'
      }
    ],
    'jsx-quotes': 'error'
  }
};
