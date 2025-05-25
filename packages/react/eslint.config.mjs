import 'eslint-plugin-only-warn'
import { defineConfig } from 'eslint/config'
import { base, jsxA11y, react, tsStrictTypeChecked } from '@pwog/eslint-config'
import storybook from 'eslint-plugin-storybook'

export default defineConfig([
    base({ name: 'base', files: ['**/*.{js,jsx,mjs,ts,tsx}'] }, true),
    tsStrictTypeChecked({
        name: 'ts-tsx',
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.build.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
    }),
    react({ name: 'tsx', files: ['**/*.tsx'] }),
    jsxA11y({ name: 'tsx', files: ['**/*.tsx'] }),
    ...storybook.configs['flat/recommended'],
    {
        name: '[tools-lint]',
        files: [
            './eslint.config.mjs',
            './vite.config.ts',
        ],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.node.json',
            },
        },
    },
    // global ignore: https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
    {
        name: '[global-ignores]',
        ignores: ['dist/*'],
    },
])
