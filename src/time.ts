export interface Time {
    minutes: number
    seconds: number
}

export function toSeconds({ minutes, seconds }: Time): number {
    return minutes * 60 + seconds
}

export function fromSeconds(seconds: number): Time {
    return {
        minutes: Math.floor(seconds / 60),
        seconds: Math.floor(seconds % 60)
    }
}

export const ZERO: Time = { minutes: 0, seconds: 0 }

export function before(t1: Time, t2: Time): boolean {
    return (
        t1.minutes < t2.minutes ||
        (t1.minutes === t2.minutes && t1.seconds < t2.seconds)
    )
}

export function after(t1: Time, t2: Time): boolean {
    return (
        t1.minutes > t2.minutes ||
        (t1.minutes === t2.minutes && t1.seconds > t2.seconds)
    )
}

function padClockText(num: number): string {
    return String(num).padStart(2, '0').padEnd(2, '0')
}

export function timeText(time: Time): string {
    return `${padClockText(time.minutes)}:${padClockText(time.seconds)}`
}

export function secondsToTimeText(seconds: number): string {
    const time = fromSeconds(seconds)
    return timeText(time)
}
