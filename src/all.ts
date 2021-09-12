import {EslintConfig} from './config';
import {recommendedConfig} from './configs/recommended.config';
import {EslintRule} from './rule';
import {noLiteral} from './rules/no-literal.rule';

export const allRules: EslintRule[] = [noLiteral];
export const allConfigs: EslintConfig[] = [recommendedConfig];
