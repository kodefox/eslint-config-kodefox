module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['eslint-comments'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    // TypeScript (@typescript-eslint/eslint-plugin)
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/camelcase': ['error', { properties: 'always' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/prefer-interface': 'off',

    // ESLint (eslint-plugin-eslint-comments)
    'eslint-comments/no-unused-disable': 'warn',

    // Other
    'array-callback-return': 'warn',
    // Disabling "camelcase" in favor of "@typescript-eslint/camelcase"
    camelcase: 'off',
    curly: 'warn',
    'eol-last': 'warn',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'guard-for-in': 'warn',
    // Disabling "indent" because it gets confused with JSX in some cases.
    indent: 'off',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': ['warn', { includeExports: true }],
    'no-floating-decimal': 'warn',
    'no-new': 'warn',
    'no-proto': 'warn',
    'no-return-assign': 'warn',
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
    'no-unneeded-ternary': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'off',
    radix: 'warn',
    yoda: 'warn',

    // Code Style
    'array-bracket-spacing': ['warn', 'never'],
    'arrow-parens': 'warn',
    'arrow-spacing': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: false }],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'warn',
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'no-extra-parens': ['warn', 'functions'],
    'no-extra-semi': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-spaces': 'warn',
    'no-spaced-func': 'warn',
    'no-trailing-spaces': 'warn',
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'semi-spacing': 'warn',
    semi: 'warn',
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
  },
};
