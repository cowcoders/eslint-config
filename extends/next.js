module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        'beforeSelfClosing': 'never'
      }
    ],
    'jsx-quotes': 'error'
  }
};
