import {RuleTester} from 'eslint';
import {allRules} from './all';
import {EslintRule} from './rule';

const tester = new RuleTester({parserOptions: {ecmaVersion: 2017}});

type TestResult = {
    ruleName: string;
    passed: boolean;
};

export function testRule(rule: EslintRule): void {
    tester.run(rule.ruleName, rule.eslint, rule.tests);
}

allRules.forEach((rule) => {
    testRule(rule);
});
