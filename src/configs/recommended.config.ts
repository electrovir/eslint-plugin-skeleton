import {EslintConfig} from '../config';
import {pluginName} from '../plugin';

console.log(pluginName);

export const recommendedConfig: EslintConfig = {
    eslint: {
        plugins: [pluginName],
        env: {node: true},
        rules: {
            [`${pluginName}/no-literal`]: 'error',
        },
    },
    configName: 'recommended',
};
