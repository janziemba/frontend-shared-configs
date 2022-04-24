module.exports = {
    extends: ['airbnb', 'eslint:recommended', 'plugin:import/errors', 'prettier'],
    parser: '@babel/eslint-parser',
    plugins: ['prettier', 'simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
    rules: {
        'import/extensions': [
            2,
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-duplicates': 0, // because imports from date-fns and date-fns/locale would be replaced with just date-fns, which is wrong
        'import/no-mutable-exports': 0, // HOCs
        indent: 0, // prettier uses his own indentation system
        'no-class-assign': 0, // HOCs
        'no-console': 2,
        'no-duplicate-imports': 2,
        'no-empty': [2, { allowEmptyCatch: true }], // empty catch is better than no catch
        'prettier/prettier': 2,
        'simple-import-sort/exports': 2,
        'simple-import-sort/imports': 2,
        'sort-keys': 0, // sort-keys-fix/sort-keys-fix is used instead
        'sort-keys-fix/sort-keys-fix': 2,
        'sort-destructure-keys/sort-destructure-keys': 2,
    },
};
