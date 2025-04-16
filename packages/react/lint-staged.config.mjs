/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
    '*.{ts,tsx}': [
        'eslint --max-warnings 0',
        'tsc -b',
    ],
    '*.{js,mjs}': [
        'eslint --max-warnings 0',
    ],
    '*.{css,scss}': [
        'stylelint --fix',
    ],
}

export default config
