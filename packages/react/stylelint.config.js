/** @type {import('stylelint').Config} */
export default {
    defaultSeverity: 'warning',
    extends: ['stylelint-config-standard'],
    ignoreFiles: ['dist/**/*.css'],
    rules: {
        'color-hex-length': 'long',
    },
}
