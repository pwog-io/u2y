import { forwardRef } from 'react'
import type { ButtonProps } from './Button.types'

import styles from './Button.module.css'
// import styles from './Button.module.css?inline'

export type Ref = HTMLButtonElement

/** Component name */
const displayName = 'Button'
/** Component identifier */
const idx = 'button'

/**
 * Uway **`Button`** component
 */
export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {

    const {
        children,
        variant,
        ...restProps
    } = props

    return (
        <button
            { ...restProps }
            className={styles.containerStyle}
            data-variant={ variant ?? 'solid' }
        >
            <span data-u2y={ `${idx}.label` }>
                {children}
            </span>
        </button>
    )
})

// Fix for: Component definition is missing display nameeslintreact/display-name
Button.displayName = displayName
