import {Rule, RuleTester} from 'eslint';

export type EsLintRuleTests = {
    valid?: (string | RuleTester.ValidTestCase)[];
    invalid?: RuleTester.InvalidTestCase[];
};

export type EsLintRule = {
    eslint: Rule.RuleModule;
    ruleName: string;
    tests: EsLintRuleTests;
};

export type RuleDefinitions = {[name: string]: Rule.RuleModule};
