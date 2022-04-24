module.exports = {
    extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@babel/eslint-parser',
    plugins: ['jsx-a11y', 'react', 'react-hooks'],
    rules: {
        'react/boolean-prop-naming': 2,
        'react/display-name': 0,
        'react/forbid-component-props': [2, { forbid: ['className', 'style'] }],
        'react/forbid-dom-props': [2, { forbid: ['style'] }],
        'react/forbid-prop-types': 0, // prop types are deprecated
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': 0, // prettier uses his own indentation system
        'react/jsx-sort-props': 2,
        'react/prop-types': 0, // prop types are deprecated
        'react/require-default-props': 0, // prop types are deprecated
        'react/react-in-jsx-scope': 0, // react in scope is not needed since react 17
    },
};
