import { useEffect, useState, useRef, forwardRef } from 'react'

import type { CountdownProps } from './Countdown.types'

import styles from './Countdown.module.scss'

export type CountdownRef = HTMLDivElement

/** Component name */
const displayName = 'Countdown'

export const Countdown = forwardRef<CountdownRef, CountdownProps>((props, ref) => {
    const {
        seconds,
        size = 120,
        strokeWidth = 4,
        onComplete,
        ...restProps
    } = props

    // const gradientId = `u2y-${idx}-gradient`
    const radius = (size - strokeWidth) / 2 // circle radius
    const circumference = 2 * Math.PI * radius

    const [timeLeft, setTimeLeft] = useState(seconds)
    const [dashOffset, setDashOffset] = useState(0)

    // const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const startTimeRef = useRef<number>(0)
    const remainingTimeRef = useRef<number>(seconds)

    // Smooth animation with requestAnimationFrame
    useEffect(() => {
        startTimeRef.current = Date.now()
        remainingTimeRef.current = seconds

        const animate = () => {
            const elapsedTime = (Date.now() - startTimeRef.current) / 1000
            const remaining = seconds - elapsedTime

            if (remaining <= 0) {
                setTimeLeft(0)
                setDashOffset(circumference)

                if (onComplete) onComplete()

                return
            }

            // Update the visual countdown
            setTimeLeft(Math.ceil(remaining))

            // Update the circle progress
            const progress = remaining / seconds
            setDashOffset(circumference * (1 - progress))

            // Continue animation
            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [seconds, circumference, onComplete])

    return (
        <div
            className={styles.container}
            ref={ref}
            style={{ width: size, height: size }}
            role='progressbar'
            aria-valuenow={timeLeft}
            {...restProps}
        >
            <svg width={size} height={size}>
                <circle
                    className={styles.progressBackground}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className={styles.progressForeground}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    // stroke={color}
                    // stroke={`url(#${gradientId})`}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                />
            </svg>

            <div
                className={styles.timer}
                style={{
                    width: size,
                    height: size,
                    fontSize: size * 0.4,
                }}
            >
                {timeLeft}
            </div>
        </div>
    )
})

Countdown.displayName = displayName
