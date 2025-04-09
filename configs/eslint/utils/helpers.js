import { defineConfig } from 'eslint/config'

/**
 * Returns a ESLint config factory function for the given configuration array
 *
 * @param {import('eslint').Linter.Config[]} defaultConfigs
 */
export function getConfigFactory(defaultConfigs) {
    /**
    * Configurable interface for the exported `defaultConfigs`
    *
    * Note: we recommend to ALWAYS provides the `files` property in the
    * `config` argument so the configuration is only applied to the desired files.
    * Example: `config({ files: ['**\/*.ts'] })`
    *
    * @param {import('eslint').Linter.Config} config Eslint configuration object
    * @param {boolean} [override=false] Whether to override the default configs.
    *                                   If `true`, properties specified in given config will
    *                                   override any propperties in default configs with the same name.
    *                                   Useful when you want to replace default config values with your own.
    *
    * @returns {import('eslint').Linter.Config[]}
    */
   const configFactory  = (config, override = false) => {
       if (!config || typeof config !== 'object') {
           return defaultConfigs
       }

       if (!override) {
           return defineConfig([{
               extends: [defaultConfigs],
               ...config,
               name: config.name ? `[${config.name}]` : '',
           }])
       }

       return defaultConfigs.map((defaultConfig) => {
           return {
               ...defaultConfig,
               ...config,
               name: config.name
                    ? `[${config.name}] > ${defaultConfig.name}`
                    : `[User Override] > ${defaultConfig.name}`,
           }
       })
   }

   return configFactory
}
