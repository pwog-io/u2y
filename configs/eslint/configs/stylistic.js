/*-----------------------------------------------------------------------------
|> Stylistic ESLint Configs - plugin(s): `@stylistic/eslint-plugin`
|------------------------------------------------------------------------------
| ...
|
| https://eslint.style
-----------------------------------------------------------------------------*/
import stylisticPlugin from '@stylistic/eslint-plugin'

/**
 * Stylistic eslint config based on `@stylistic/eslint-plugin`
 *
 * Applies `@stylistic/eslint-plugin` recommended rules plus standard rules based on
 * Pwog coding style guide.
 *
 * ...
 *
 * Note: `@eslint/js` recommended rules are also applied and can be extended or
 * overriden like any other eslint rules.
 *
 * Included `@stylistic/eslint-plugin` configs:
 * {@link [recommended](https://eslint.style/guide/config-presets/)}
 *
 * @type {import('eslint').Linter.Config[]}
 */
export const defaultConfigs = [
    {
        name: '@pwog/stylistic/recommended',
        ...stylisticPlugin.configs.recommended,
    },
    {
        name: '@pwog/stylistic-config',
        plugins: {
            '@stylistic': stylisticPlugin,
        },
        rules: {
            '@stylistic/semi': [ 'warn', 'never'],
            '@stylistic/no-extra-semi': 'warn',
            '@stylistic/linebreak-style': [ 'warn', 'unix' ],
            '@stylistic/indent': [ 'warn', 4, {
                SwitchCase: 4,
            }],
            // JSX rules
            '@stylistic/jsx-indent-props': [ 'warn', 4 ],
            '@stylistic/jsx-quotes': [ 'warn', 'prefer-single' ],
            '@stylistic/comma-dangle': [ 'warn', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                // 'functions': 'always-multiline',
            }],
        },
    },
]

export default defaultConfigs
