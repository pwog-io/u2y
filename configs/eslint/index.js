/*-----------------------------------------------------------------------------
|> Pwog ESLint Config Entrypoint
|------------------------------------------------------------------------------
| ...
|
-----------------------------------------------------------------------------*/
import { getConfigFactory } from './utils/helpers.js'

import baseConfigs from './configs/base.js'
import stylisticConfigs from './configs/stylistic.js'
import reactConfigs from './configs/react.js'
import {
    tsRecommendedConfigs,
    tsTypeCheckedConfigs,
    tsStrictConfigs,
    tsStrictTypeCheckedConfigs
} from './configs/typescript.js'


export { default as baseConfigs } from './configs/base.js'
export { default as stylisticConfigs } from './configs/stylistic.js'
export { default as reactConfigs } from './configs/react.js'
export {
    tsRecommendedConfigs,
    tsTypeCheckedConfigs,
    tsStrictConfigs,
    tsStrictTypeCheckedConfigs
} from './configs/typescript.js'


export const base = getConfigFactory([...baseConfigs, ...stylisticConfigs])
export const react = getConfigFactory(reactConfigs)
export const tsRecommended = getConfigFactory(tsRecommendedConfigs)
export const tsStrict = getConfigFactory(tsStrictConfigs)
export const tsTypeChecked = getConfigFactory(tsTypeCheckedConfigs)
export const tsStrictTypeChecked = getConfigFactory(tsStrictTypeCheckedConfigs)

export default [
    baseConfigs,
    stylisticConfigs,
]
