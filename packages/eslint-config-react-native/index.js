module.exports = {
    extends: [
        '@react-native-community',
        'plugin:react-hooks/recommended',
        'plugin:react-native/all',
        'plugin:react-native-a11y/all',
    ],
    plugins: ['react-hooks', 'react-native', 'react-native-a11y'],
    parser: '@babel/eslint-parser',
    rules: {
        'react/boolean-prop-naming': 2,
        'react/display-name': 0,
        'react/forbid-prop-types': 0, // prop types are deprecated
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': 0, // prettier uses his own indentation system
        'react/jsx-sort-props': 2,
        'react/prop-types': 0, // prop types are deprecated
        'react/require-default-props': 0, // prop types are deprecated
        'react-native/sort-styles': 0, // sort-keys-fix/sort-keys-fix is used instead
    },
};
