/*-----------------------------------------------------------------------------
|> React ESLint Configs - plugin(s): `eslint-plugin-react`
|  & `eslint-plugin-react-hooks`
|------------------------------------------------------------------------------
| ...
|
-----------------------------------------------------------------------------*/
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

/**
 * Eslint configuration for React based on `eslint-plugin-react`
 * & `eslint-plugin-react-hooks` recommended configs.
 *
 * `eslint-plugin-react` - {@link https://github.com/jsx-eslint/eslint-plugin-react/}
 *
 * `eslint-plugin-react-hooks` - {@link https://react.dev/reference/rules/rules-of-hooks}
 *
 * @type {import('eslint-plugin-react').ReactFlatConfig[]}
 */
const defaultConfigs = [
    {
        name: '@pwog/react/recommended',
        // files: ['**/*.{jsx,tsx}'],
        ...reactPlugin.configs.flat.recommended,
    },
    {
        name: '@pwog/react/jsx-runtime',
        // disable unnecessary config options for React 17+(using new JSX transform)
        //      https://www.npmjs.com/package/eslint-plugin-react#configuration-legacy-eslintrc-
        ...reactPlugin.configs.flat['jsx-runtime'],
    },
    {
        ...reactHooksPlugin.configs['recommended-latest'],
        // ! Must be added after plugin's config to force override name attribute
        name: '@pwog/react-hooks/recommended',
    },
    {
        name: '@pwog/react-config',
        // files: ['**/*.{jsx,tsx}'],
        plugins: {
            'react': reactPlugin,
            // 'react-hooks': reactHooksPlugin,
        },
        languageOptions: {
            globals: {
                // ...globals.browser,
                ...globals.serviceworker,
            },
        },
        settings: { react: { version: 'detect' } },
    },
]

export default defaultConfigs
