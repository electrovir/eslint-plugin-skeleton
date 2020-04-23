# ESLint Plugin Skeleton

Bare bones eslint plugin for easy extensibility.

Requires [`tester-for-eslint-plugin`](https://github.com/electrovir/tester-for-eslint-plugin) for full process to work (this is documented below).

Based on [eslint-plugin-tutorial](https://github.com/Quramy/eslint-plugin-tutorial).

# Process

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

# How to add rules

1. Add a new `.rule.ts` file into `src/rules`.
2. From within that file, export a variable of type `EsLintRule` (see [`no-literal.rule.ts`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/rules/no-literal.rule.ts) for an example).
3. Import your newly exported rule into [`index.ts`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/index.ts).
4. Add the imported rule to the [`allRules`](https://github.com/electrovir/eslint-plugin-skeleton/blob/master/src/index.ts#L4) array.
5. The end!

See the [relevant ESLint documentation for rule implementation details](https://eslint.org/docs/developer-guide/working-with-rules).

# Todo

Add a config skeleton.
