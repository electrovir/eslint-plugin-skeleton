# ESLint Plugin Skeleton

Bare bones eslint plugin for easy extensibility.

Requires [`tester-for-eslint-plugin`](https://github.com/electrovir/tester-for-eslint-plugin) for full process to work (this is documented below).

Based on [`eslint-plugin-tutorial`](https://github.com/Quramy/eslint-plugin-tutorial).

# Testing

## First time

```bash
git clone https://github.com/electrovir/eslint-plugin-skeleton.git
cd eslint-plugin-skeleton
npm install
npm link

cd ../
git clone https://github.com/electrovir/tester-for-eslint-plugin.git
cd ../tester-for-eslint-plugin
npm install
npm link eslint-plugin-skeleton
npm run lint
```

## Subsequent times

```bash
npm run full-test
```

If you don't change the companion `tester-for-eslint-plugin` repo at all, this test _will_ intentionally throw errors so that you know it's actually running.

# How to add rules

1. Add a new `.rule.ts` file into `src/rules`.
2. From within that file, export a variable of type [`EslintRule`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/rule.ts#L8) (see [`no-literal.rule.ts`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/rules/no-literal.rule.ts) for an example).
3. Import your newly exported rule into [`all.ts`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/all.ts).
4. Add the imported rule to the [`allRules`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/all.ts) array.
5. Test using `npm run full-test`.

See the [relevant ESLint documentation for rule implementation details](https://eslint.org/docs/developer-guide/working-with-rules).

# How to add configs

1. Add a new `.config.ts` file into `src/configs`.
2. From within that file, export a variable of type [`EslintConfig`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/config.ts#L3) (see [`recommended.config.ts`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/configs/recommended.config.ts) for an example).
3. Import your newly exported config into [`all.ts`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/all.ts).
4. Add the imported config to the [`allConfigs`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/all.ts#L8) array.
5. Test using `npm run full-test`.

See the [relevant ESLint documentation for config details](https://eslint.org/docs/developer-guide/shareable-configs).

# How to turn this into an independent plugin

1. Change [`pluginName` in `plugin.ts`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/plugin.ts) to reflect your new plugin name.
2. Change [`name` in `package.json`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/package.json) to reflect your new plugin name (make sure to include the `eslint-plugin` prefix).
3. Make other necessary changes to [`package.json`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/package.json).
    - Change the `private`, `repository`, `homepage`, `bugs`, `author`, `license`, etc. properties as needed.
4. Add or remove any rules or configs in `src` as explained in the sections above.
5. Test using `npm run full-test` as explained in the Testing section above.
6. Publish new package to npm.
