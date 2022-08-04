import Slider from '@mui/material/Slider'
import { fromSeconds, Time, toSeconds } from './time'
import React, { useState } from 'react'

function padClockText(num: number): string {
    return String(num).padStart(2, '0')
}

function secondsToTimeText(seconds: number): string {
    const time = fromSeconds(seconds)
    return `${padClockText(time.minutes)}:${padClockText(time.seconds)}`
}

export type TimeChangeHandler = (time: Time) => void

function Bar(props: {
    max: Time
    current: Time
    start: Time
    end: Time
    onStartChange: TimeChangeHandler
    onEndChange: TimeChangeHandler
}) {
    const [max] = useState<number>(toSeconds(props.max))
    const [current] = useState<number>(toSeconds(props.current))
    const [start, setStart] = useState<number>(toSeconds(props.start))
    const [end, setEnd] = useState<number>(toSeconds(props.end))
    return (
        <>
            <Slider
                min={0}
                max={max}
                marks={[
                    {
                        value: current,
                        label: secondsToTimeText(current)
                    }
                ]}
                valueLabelFormat={secondsToTimeText}
                valueLabelDisplay='auto'
                value={[start, end]}
                disableSwap={true}
                onChange={(_, values) => {
                    const [newStart, newEnd] = values as number[]
                    if (newEnd - newStart > 1) {
                        if (newStart !== start) {
                            props.onStartChange(fromSeconds(newStart))
                            setStart(newStart)
                        } else if (newEnd !== end) {
                            props.onEndChange(fromSeconds(newEnd))
                            setEnd(newEnd)
                        }
                    }
                }}
            />
        </>
    )
}

export default Bar
