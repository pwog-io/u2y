import { RuleConfigSeverity, type UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
    // https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
    extends: ['@commitlint/config-conventional'],
    // https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
    rules: {
        'body-case': [ RuleConfigSeverity.Error, 'always', 'sentence-case' ],
        'subject-case': [ RuleConfigSeverity.Error, 'always', 'sentence-case' ],
        'type-enum': [
            RuleConfigSeverity.Error,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test'
            ]
        ]
    }
}

export default Configuration
