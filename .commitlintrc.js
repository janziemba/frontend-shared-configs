module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 72],
        'scope-empty': [2, 'always'],
        'subject-case': [2, 'always', 'sentence-case'],
        'type-case': [2, 'always', 'pascal-case'],
        'type-enum': [
            2,
            'always',
            ['New', 'Fix', 'Update', 'Breaking', 'Docs', 'Build', 'Upgrade', 'Chore'],
        ],
    },
};
