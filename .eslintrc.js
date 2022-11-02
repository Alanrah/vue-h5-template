const { resolve } = require('path');

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        // 'plugin:vue/vue3-essential',
        // 'standard-with-typescript',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        project: resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        sourceType: 'module' // Allows for the use of imports
    },
    plugins: [
        'vue'
    ],
    rules: {
        quotes: ['warn', 'single', { avoidEscape: true }],
        indent: ['error', 4],
        semi: ['error', 'always'],
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }]
    }
};
