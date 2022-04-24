module.exports = {
    branches: ['main'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'eslint',
                releaseRules: [
                    { release: 'minor', tag: 'New' },
                    { release: 'patch', tag: 'Fix' },
                    { release: 'patch', tag: 'Update' },
                    { release: 'patch', tag: 'Breaking' },
                    { release: 'patch', tag: 'Upgrade' },
                    { release: 'patch', tag: 'Chore' },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json'],
                message: 'Chore: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
