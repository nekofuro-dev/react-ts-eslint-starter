module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['react', 'react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'arrow-body-style': 'off'
  },
}
