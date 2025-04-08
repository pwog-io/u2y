/*-----------------------------------------------------------------------------
|> Base ESLint Configs - plugin(s): `eslint/js`
|------------------------------------------------------------------------------
| ...
|
| https://eslint.org/docs/latest/
-----------------------------------------------------------------------------*/
import jsPlugin from '@eslint/js'
import globals from 'globals'

/**
 * JavaScript eslint config based on `eslint` plugin
 *
 * ... includes globals for browser and ...
 *
 * `eslint/js` rules - {@link https://eslint.org/docs/latest/rules/}
 *
 * @type {import('eslint').Linter.Config[]}
 */
const defaultConfigs = [
    {
        name: '@pwog/eslint/recommended',
        ...jsPlugin.configs.recommended,
    },
    {
        name: '@pwog/eslint-config',
        rules: {
            'no-console': 'warn',
            'no-var': 'warn',
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly',
            },
        },
    },
]

export default defaultConfigs
