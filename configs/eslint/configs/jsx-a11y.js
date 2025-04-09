/*-----------------------------------------------------------------------------
|> JSX Accessibility ESLint Configs - plugin(s): `eslint-plugin-jsx-a11y`
|------------------------------------------------------------------------------
| ...
|
|
-----------------------------------------------------------------------------*/
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

/**
 * ...
 *
 * `eslint-plugin-jsx-a11y` - {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y}
 *
 * @type {import('eslint').Linter.Config[]}
 */
const defaultConfigs = [
    {
        name: '@pwog/jsx-a11y/recommended',
        // files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        ...jsxA11yPlugin.flatConfigs.recommended,
        languageOptions: {
            ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
                // ...globals.browser,
            },
        },
    },
]

export default defaultConfigs
