module.exports = {
    env: {
        jest: true,
    },
    extends: ['./eslint-config-base'],
    globals: {
        after: false,
        afterEach: false,
        AppleID: true,
        before: false,
        beforeEach: false,
        describe: false,
        document: true,
        fbq: true,
        fcWidget: true,
        google: true,
        google_optimize: true,
        gtag: true,
        Intercom: true,
        it: false,
        navigator: true,
        require: false,
        smartlook: true,
        window: true,
    },
    ignorePatterns: ['node_modules'],
    parser: '@babel/eslint-parser', // or @typescript-eslint/parser
};
