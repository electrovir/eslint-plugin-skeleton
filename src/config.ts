import {Linter} from 'eslint';

export type EslintConfig = {
    eslint: Linter.BaseConfig;
    configName: string;
};

export type ConfigDefinitions = {[name: string]: Linter.BaseConfig};
