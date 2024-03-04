module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error'],
        '@typescript-eslint/no-explicit-any': ['off'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
