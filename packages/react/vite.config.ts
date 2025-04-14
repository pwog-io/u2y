import crypto from 'crypto'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

import { fileURLToPath } from 'node:url'
import { basename, dirname, extname, relative, resolve } from 'path'
import { glob } from 'glob'
import { defineConfig } from 'vite'

const filepath: string = fileURLToPath(import.meta.url)
const dir = dirname(filepath)
const buildInputsIgnore = [
    'src/**/*.d.ts',
    'src/**/*.types.ts',
    'src/**/*.stories.tsx',
]

export default defineConfig({
    // https://vite.dev/guide/build#library-mode
    build: {
        // tells vite not to copy content of public dir to the build folder
        copyPublicDir: false,
        cssCodeSplit: true,
        sourcemap: process.env.NODE_ENV !== 'production',
        lib: {
            entry: resolve(dir, 'src/index.ts'),
            formats: [
                'es',
            ],
        },
        rollupOptions: {
            external: [
                'react',
                'react/jsx-runtime',
            ],
            input: Object.fromEntries(
                glob.sync('src/**/*.{ts,tsx}', { ignore: buildInputsIgnore }).map(file => [
                    // This remove `src/` as well as the file extension from each file
                    // src/nested/foo.ts becomes nested/foo
                    relative('src', file.slice(0, file.length - extname(file).length)),
                    // This expands the relative paths to absolute paths
                    // The absolute path to the entry file
                    // src/nested/foo.ts becomes /project/src/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url)),
                ])
            ),
            output: {
                assetFileNames: 'components/[name]/style.css',
                // assetFileNames: 'components/[name]/[name][extname]',
                entryFileNames: chunk => `${chunk.name.toLowerCase()}.js`,
                /* Adds CSS import statement at the top of compiled component files */
                intro: (chunk) => {
                    // console.log('CHUNK: ', chunk.name, chunk.viteMetadata?.importedCss)
                    // console.log('CHUNK: ', chunk.name)
                    // console.log(chunk)

                    if (!chunk.name.startsWith('components') || !chunk.facadeModuleId?.endsWith('tsx')) {
                        return ''
                    }

                    return `
                    'use client'
                    import './style.css'
                    `
                },
            },
        },
    },
    css: {
        // https://github.com/madyankin/postcss-modules
        modules: {
            // ? css seletors authored w/ dashes will be converted to camelCase on build
            localsConvention: 'camelCaseOnly',
            // https://github.com/madyankin/postcss-modules
            // generateScopedName: 'u2y-[local]-[hash:base64:5]'.toLowerCase(),
            generateScopedName(name, filepath, css) {
                // Generate a 6 characters length class name(hash) for distribution build
                if (process.env.NODE_ENV === 'production') {
                    return crypto
                        .createHash('sha256')
                        .update(`${name}:${css}`)
                        .digest('base64url')
                        .replace(/[-_]/, '')
                        .replace(/^[\d]+/, '') // make sure class names don't start w/ number
                        .slice(0, 6)
                        .toLowerCase()
                }

                // .../components/Button/Button.module.css?used ==> button
                const componentName = basename(filepath).split('.', 1)[0].toLowerCase()

                return `u2y-${componentName}-${name}`
            },
        },
        // Ensure proper source maps in development
        devSourcemap: true,
    },
    plugins: [
        // https://github.com/qmhc/vite-plugin-dts
        // auto generate declaration files(*.d.ts) for our .ts[x] files
        dts({
            // copyDtsFiles: true,
            // required else .d.ts files are not generated. Bug: https://github.com/qmhc/vite-plugin-dts/issues/344
            tsconfigPath: './tsconfig.build.json',
            // ! Added to disable sourcemap generation in distributed bundle w/ the
            // !    assumption that this is merged w/ tsconfig options.
            // ? we need to validate above assumption & make sure `compilerOptions` values are merged(not overriden)
            compilerOptions: {
                declarationMap: process.env.NODE_ENV !== 'production',
            },
        }),
        react(),
    ],
})
