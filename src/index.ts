import {allConfigs, allRules} from './all';
import {ConfigDefinitions} from './config';
import {RuleDefinitions} from './rule';

export const rules: RuleDefinitions = allRules.reduce((accum: RuleDefinitions, rule) => {
    if (accum[rule.ruleName]) {
        throw new Error(`Duplicate rule name: "${rule.ruleName}"`);
    } else {
        accum[rule.ruleName] = rule.eslint;
    }
    return accum;
}, {});

export const configs: ConfigDefinitions = allConfigs.reduce((accum: ConfigDefinitions, config) => {
    if (accum[config.configName]) {
        throw new Error(`Duplicate config name: "${config.configName}"`);
    } else {
        accum[config.configName] = config.eslint;
    }
    return accum;
}, {});

console.log(configs);
