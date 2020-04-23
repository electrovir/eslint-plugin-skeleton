import {RuleTester} from 'eslint';
import {EsLintRule} from './rule';
import {allRules} from './index';

const tester = new RuleTester({parserOptions: {ecmaVersion: 2017}});

type TestResult = {
    ruleName: string;
    passed: boolean;
};

export function testRule(rule: EsLintRule): void {
    tester.run(rule.ruleName, rule.eslint, rule.tests);
}

export function testRules(rules: EsLintRule[]): TestResult[] {
    return rules.map(rule => {
        const result = {
            passed: true,
            ruleName: rule.ruleName,
        };
        try {
            testRule(rule);
            return result;
        } catch (error) {
            return {...result, passed: false};
        }
    });
}

// when script is directly executed
if (!module.parent) {
    const args = process.argv.slice(2);
    const testIndex: number = Number(args[0]);

    const rulesToTest = isNaN(testIndex) ? allRules : [allRules[testIndex]];

    const results = testRules(rulesToTest);

    console.log(
        '\t' + results.map(result => `${result.passed ? 'Passed' : 'Failed'}:\t${result.ruleName}`).join('\t\n'),
    );
}
