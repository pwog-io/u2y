/** @type {import('stylelint').Config} */
export default {
    defaultSeverity: 'warning',
    // https://github.com/stylelint-scss/stylelint-config-standard-scss
    extends: ['stylelint-config-standard-scss'],
    ignoreFiles: ['dist/**/*.css'],
    // ! required to get VsCode Stylelint extension to work
    overrides: [
        {
            files: ['src/**/*.scss'],
            customSyntax: 'postcss-scss', // included by `stylelint-config-standard-scss`
        },
    ],
    // https://stylelint.io/user-guide/rules/
    rules: {
        'color-hex-length': 'long',
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
        'selector-max-id': [0, { message: 'No ID selector' }],
        'selector-pseudo-class-no-unknown': [
            true,
            // {
            //     ignorePseudoClasses: ['global'],
            // },
        ],
        'scss/double-slash-comment-empty-line-before': null,
    },
}
