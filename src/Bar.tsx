import Slider from '@mui/material/Slider'
import { fromSeconds, secondsToTimeText, Time, toSeconds } from './time'
import React from 'react'

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
    const end = toSeconds(props.end)
    return (
        <>
            <Slider
                sx={{
                    '& .MuiSlider-thumb': {
                        borderRadius: 0,
                        width: '3px'
                    },
                    '& .MuiSlider-markActive': {
                        height: '20px',
                        border: '1px solid black'
                    }
                }}
                min={0}
                max={toSeconds(props.max)}
                marks={[
                    {
                        value: toSeconds(props.current)
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
                        } else if (newEnd !== end) {
                            props.onEndChange(fromSeconds(newEnd))
                        }
                    }
                }}
            />
        </>
    )
}

export default Bar
