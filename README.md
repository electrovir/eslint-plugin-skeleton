# ESLint Plugin Skeleton

Bare bone eslint plugin for easy extensibility.

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

# Subsequent times

No need to link again for changes. However, the changes will have to get built still, as shown below:

```bash
cd eslint-plugin-skeleton
npm prepare

cd ../tester-for-eslint-plugin
npm run lint
```
