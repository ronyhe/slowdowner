import Slider from '@mui/material/Slider'
import { fromSeconds, secondsToTimeText, Time, toSeconds } from './time'
import React, { useEffect, useRef } from 'react'

export type TimeChangeHandler = (time: Time) => void

function Bar(props: {
    max: Time
    current: Time
    start: Time
    end: Time
    onStartChange: TimeChangeHandler
    onEndChange: TimeChangeHandler
}) {
    const start = toSeconds(props.start)
    const current = toSeconds(props.current)
    const end = toSeconds(props.end)
    const ref = useRef<HTMLElement>()
    useEffect(() => {
        const thumb =
            ref.current && ref.current.querySelectorAll('.MuiSlider-thumb')[1]
        if (thumb) {
            thumb.classList.add('current-time-thumb')
        }
    }, [ref])
    return (
        <>
            <Slider
                sx={{
                    '& .MuiSlider-thumb': {
                        borderRadius: 0,
                        width: '3px'
                    },
                    '.current-time-thumb': {
                        color: 'white'
                    }
                }}
                min={0}
                max={toSeconds(props.max)}
                valueLabelFormat={secondsToTimeText}
                valueLabelDisplay='auto'
                value={[start, current, end]}
                disableSwap={true}
                onChange={(_, values) => {
                    const [newStart, , newEnd] = values as number[]
                    if (newEnd - newStart > 1) {
                        if (newStart !== start) {
                            props.onStartChange(fromSeconds(newStart))
                        } else if (newEnd !== end) {
                            props.onEndChange(fromSeconds(newEnd))
                        }
                    }
                }}
                {...({ ref: ref } as {})} // Workaround for ref typing issue in MUI
            />
        </>
    )
}

export default Bar
