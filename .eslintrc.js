const { resolve } = require('path');
module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        project: resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ['@typescript-eslint','vue', 'import'],
    rules:{
        quotes: ['warn', 'single', {avoidEscape: true}],
        indent: ['error', 4],
        semi: ['error', 'always'],
        'vue/multi-word-component-names': 'off',

        'prefer-promise-reject-errors': 'off',

        // TypeScript
        '@typescript-eslint/explicit-function-return-type': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'no-undefined': 'off',
        'no-extra-parens': 'off',
        'max-params': 'off',
        'no-unused-expressions': 'off',
        'require-atomic-updates': 'off',
        'vue/require-default-prop': 'off',
        'vue/no-deprecated-v-on-native-modifier': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/order': [
            'warn',
            {
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'internal',
                    },
                ],
                groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index']],
            },
        ],
        'import/no-duplicates': ['error', {considerQueryString: true}],
        'react/display-name': 0,
        'vue/no-deprecated-v-bind-sync': 'off',
    }
};
