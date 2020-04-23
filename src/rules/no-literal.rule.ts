import {EsLintRule} from '../rule';

export const noLiteral: EsLintRule = {
    eslint: {
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
