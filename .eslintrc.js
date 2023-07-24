module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface' : 'off',
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-console": 1,
    "@typescript-eslint/naming-convention": ["error",
    {
      selector: 'variable',
      filter: '__typename',
      format: null,
    },
    {
      selector: 'variable',
      types: ['function'],
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'variable',
      types: ['boolean', 'number', 'string', 'array'],
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
  },
};
