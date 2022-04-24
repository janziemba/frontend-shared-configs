# Frontend shared configs for ESLint, Prettier, TypeScript, .editorconfig, commitlint, etc.

## Getting started

Copy the [.npmrc](.npmrc) file to your project

## ESLint configs

For example:

```sh
yarn add @janziemba/eslint-config-base @janziemba/eslint-config-react @janziemba/eslint-config-typescript
```

### .eslintrc.js

```js
module.exports = {
    extends: [
        require.resolve('@janziemba/eslint-config-base'),
        require.resolve('@janziemba/eslint-config-react'),
        require.resolve('@janziemba/eslint-config-typescript'),
    ],
};
```

## Other configs

```sh
yarn add @janziemba/frontend-shared-configs
```

### .vscode

In VS Code, install [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Settings

Copy + paste the file [.vscode/settings.json](.vscode/settings.json) to your project.

### .commitlintrc.js

```js
module.exports = {
    extends: [require.resolve('@janziemba/frontend-shared-configs/.commitlintrc.js')],
};
```

### .editorconfig

Copy + paste the file [.editorconfig](.editorconfig)

### .lintstagedrc.js

See example in [.lintstagedrc.js](.lintstagedrc.js)

### .prettierrc.js

```js
module.exports = require('@janziemba/frontend-shared-configs/.prettierrc.js');
```

### .releaserc.js

```js
module.exports = {
    extends: [require.resolve('@janziemba/frontend-shared-configs/.releaserc.js')],
};
```

### tsconfig.json

```js
{
    "extends": "./node_modules/@janziemba/frontend-shared-configs/tsconfig.json"
}
```

### Husky

```sh
yarn add husky pretty-quick lint-staged --dev
npm set-script prepare "husky install && echo 'PATH=$PATH:'$PATH >> .husky/_/husky.sh"
yarn prepare
yarn husky add .husky/pre-commit "yarn pretty-quick --staged && yarn lint-staged && yarn tsc"
yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

https://github.com/typicode/husky/issues/904#issuecomment-862184954
