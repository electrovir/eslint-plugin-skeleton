import {Rule} from 'eslint';

export const rule: Rule.RuleModule = {
    create(context) {
        return {
            Literal: node => {
                context.report({
                    message: '😿',
                    node,
                });
            },
        };
    },
};

export default rule;
