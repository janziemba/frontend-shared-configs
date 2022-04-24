module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:typescript-sort-keys/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'typescript-sort-keys'],
    rules: {
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-unused-vars': 2,
        'no-unused-vars': 0, // @typescript-eslint/no-unused-vars is used instead
        'no-use-before-define': 0, // @typescript-eslint/no-use-before-define is used instead
        'no-shadow': 0, // @typescript-eslint/no-shadow is used instead
        '@typescript-eslint/no-shadow': 2,
    },
};
