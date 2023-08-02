module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@layout', './src/layout'],
          ['@assets', './src/assets'],
          ['@helpers', './src/helpers'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
