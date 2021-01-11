module.exports = {
  extends: [
    './index.js',
    './extends/ts.js',
    './extends/next.js'
  ],
  'rules': {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'components': [
          'Link'
        ],
        'specialLink': [
          'hrefLeft',
          'hrefRight'
        ],
        'aspects': [
          'invalidHref',
          'preferButton'
        ]
      }
    ]
  }
};
