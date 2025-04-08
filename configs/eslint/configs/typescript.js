/*-----------------------------------------------------------------------------
|> TypeScript ESLint Configs - plugin(s): `typescript-eslint`
|------------------------------------------------------------------------------
| ...
|
| Note: Using the TypeScript config w/ type-check on projects that use
| `references` in tsconfig.json(Ex: monorepo) require `languageOptions > parserOptions`
| to be set w/ the path to tsconfig.json file(s).
|
| [See `typescript-eslint` docs for more info](https://typescript-eslint.io/troubleshooting/typed-linting)
|
| https://typescript-eslint.io/packages/typescript-eslint
| https://typescript-eslint.io/rules/
| https://typescript-eslint.io/play
| https://typescript-eslint.io/users/configs#projects-without-type-checking
-----------------------------------------------------------------------------*/
import tsPlugin from 'typescript-eslint'

/**
 * ...
 *
 * @type {import('typescript-eslint').Config}
 */
const tsPwog = {
    name: '@pwog/typescript-config',
    // files: [
    //     '**/*.{cts,mts,ts,tsx}',
    // ],
    plugins: {
        '@typescript-eslint': tsPlugin.plugin,
    },
    languageOptions: {
        parser: tsPlugin.parser,
        // parserOptions: {
        //     projectService: true,
        //     project: true,
        //     // project: './tsconfig.json',
        //     tsconfigRootDir: import.meta.dirname,
        // },
    },
    rules: {
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: [ 'camelCase', 'PascalCase' ],
            },
            {
                selector: 'parameter',
                format: [ 'camelCase' ],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'memberLike',
                modifiers: [ 'private' ],
                format: [ 'camelCase' ],
                prefix: [ '__' ],
            },
            {
                selector: 'memberLike',
                modifiers: [ 'protected' ],
                format: [ 'camelCase' ],
                prefix: [ '_' ],
            },
            {
                selector: 'typeLike',
                format: [ 'PascalCase' ],
            },
            {
                selector: 'objectLiteralProperty',
                format: null,
            },
            {
                selector: 'objectLiteralMethod',
                format: null,
            },
        ],
    }
}

/**
 * ...
 *
 * Included `typescript-eslint` configs:
 * {@link [recommended](https://typescript-eslint.io/users/configs#recommended)}
 * &
 * {@link [stylistic](https://typescript-eslint.io/users/configs#stylistic)}
 *
 * @type {import('typescript-eslint').ConfigArray}
 */
export const tsRecommendedConfigs = [
    ...dedupeConfigs([
        ...tsPlugin.configs.recommended,
        ...tsPlugin.configs.stylistic,
    ]),
    tsPwog,
]

export const tsTypeCheckedConfigs = [
    ...dedupeConfigs([
        ...tsPlugin.configs.recommendedTypeChecked,
        ...tsPlugin.configs.stylisticTypeChecked,
    ]),
    tsPwog,
]

export const tsStrictConfigs = [
    ...dedupeConfigs([
        ...tsPlugin.configs.strict,
        ...tsPlugin.configs.stylistic,
    ]),
    tsPwog,
]

/**
 * ...
 *
 * Included `typescript-eslint` configs:
 * {@link [strict-type-checked](https://typescript-eslint.io/users/configs#strict-type-checked)}
 * &
 * {@link [stylistic-type-checked](https://typescript-eslint.io/users/configs#stylistic-type-checked)}
 *
 * @type {import('typescript-eslint').ConfigArray}
 */
export const tsStrictTypeCheckedConfigs = [
    ...dedupeConfigs([
        ...tsPlugin.configs.strictTypeChecked,
        ...tsPlugin.configs.stylisticTypeChecked,
    ]),
    tsPwog,
]

/**
 * Returns a new array of configs with duplicate configs removed
 *
 * @param {import('typescript-eslint').ConfigArray} configs
 *
 * @returns {import('typescript-eslint').ConfigArray}
 */
function dedupeConfigs(configs) {
    const map = new Map()

    for (const config of configs) {
        map.set(config.name, {
            ...config,
            name: config.name.replace('typescript-eslint', '@pwog/typescript'),
        })
    }

    return Array.from(map.values())
}
