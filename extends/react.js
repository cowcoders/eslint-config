module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended'
  ],
  'rules': {
    'react/jsx-tag-spacing': [
      'error',
      {
        'beforeSelfClosing': 'never'
      }
    ],
    'jsx-quotes': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent-props': [
      'error',
      'first'
    ]
  }
};
