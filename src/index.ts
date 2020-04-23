import {noLiteral} from './rules/no-literal';
import {RuleDefinitions, ExportRuleDefinitions} from './rule';

export const allRules = [noLiteral];

const definitions: RuleDefinitions = allRules.reduce((accum: RuleDefinitions, rule) => {
    if (accum[rule.ruleName]) {
        throw new Error(`Duplicate rule name: "${rule.ruleName}"`);
    } else {
        accum[rule.ruleName] = rule.eslint;
    }
    return accum;
}, {});

export default {rules: definitions} as ExportRuleDefinitions;
