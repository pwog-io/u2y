/**
* Countdown component attributes
*/
export interface CountdownProps extends React.ComponentPropsWithoutRef<'div'> {
    seconds: number
    size?: number
    strokeWidth?: number
    onComplete?: () => void
}
