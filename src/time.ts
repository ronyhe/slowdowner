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
