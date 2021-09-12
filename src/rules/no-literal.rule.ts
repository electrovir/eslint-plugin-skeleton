import {EslintRule} from '../rule';

export const noLiteral: EslintRule = {
    eslint: {
        create(context) {
            return {
                Literal: (node) => {
                    context.report({
                        message: '😿',
                        node,
                    });
                },
            };
        },
    },
    ruleName: 'no-literal',
    tests: {
        valid: [{code: `let x`}],
        invalid: [
            {
                code: `const x = 1;`,
                errors: [{message: '😿'}],
            },
        ],
    },
};
