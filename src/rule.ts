import {Rule, RuleTester} from 'eslint';

export type EslintRuleTests = {
    valid?: (string | RuleTester.ValidTestCase)[];
    invalid?: RuleTester.InvalidTestCase[];
};

export type EslintRule = {
    eslint: Rule.RuleModule;
    ruleName: string;
    tests: EslintRuleTests;
};

export type RuleDefinitions = {[name: string]: Rule.RuleModule};
