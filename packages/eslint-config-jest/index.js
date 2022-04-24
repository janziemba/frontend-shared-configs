module.exports = {
    extends: ['plugin:jest/recommended'],
    parser: '@babel/eslint-parser',
    plugins: ['jest'],
    rules: {
        'import/no-unused-modules': 0, // tests would be considered as unused modules
    },
};
