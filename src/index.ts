import {noLiteral} from './rules/no-literal.rule';
import {RuleDefinitions} from './rule';

export const allRules = [noLiteral];

export const rules: RuleDefinitions = allRules.reduce((accum: RuleDefinitions, rule) => {
    if (accum[rule.ruleName]) {
        throw new Error(`Duplicate rule name: "${rule.ruleName}"`);
    } else {
        accum[rule.ruleName] = rule.eslint;
    }
    return accum;
}, {});
