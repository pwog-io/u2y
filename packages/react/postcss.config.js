import presetEnv from 'postcss-preset-env'

/** @type {import('postcss-load-config').Config} */
export default {
    plugins: [
        // https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
        presetEnv({ }),
    ],
}
