import {EslintRule} from './rule';
import {noLiteral} from './rules/no-literal.rule';
import {EslintConfig} from './config';
import {recommendedConfig} from './configs/recommended.config';

export const allRules: EslintRule[] = [noLiteral];
export const allConfigs: EslintConfig[] = [recommendedConfig];
