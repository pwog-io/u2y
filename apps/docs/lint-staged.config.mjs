/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
    '*.{ts,tsx}': [
        'eslint --max-warnings 0',
        'tsc --noEmit',
    ],
    '*.{js,mjs}': [
        'eslint --max-warnings 0',
    ],
    // '*.{json,md}': ['prettier --write'],
}

export default config
