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

export function testRules(rules: EslintRule[]): TestResult[] {
    return rules.map((rule) => {
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
if (require.main === module) {
    const args = process.argv.slice(2);
    const testIndex: number = Number(args[0]);

    const ruleToTest = allRules[testIndex];
    const results = testRules(ruleToTest ? [ruleToTest] : allRules);

    console.log(
        '\t' +
            results
                .map((result) => `${result.passed ? 'Passed' : 'Failed'}:\t${result.ruleName}`)
                .join('\t\n'),
    );
}
