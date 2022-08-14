import Slider, { SliderThumb } from '@mui/material/Slider'
import {
    fromSeconds,
    secondsToTimeText,
    Time,
    TimeHandler,
    toSeconds
} from './time'
import React from 'react'

function ThumbWithClass(props: any) {
    if (props['data-index'] === 1) {
        return (
            <SliderThumb
                {...props}
                className={'current-time-thumb ' + props.className}
            />
        )
    }
    return <SliderThumb {...props} />
}

function Bar(props: {
    max: Time
    current: Time
    start: Time
    end: Time
    onStartChange: TimeHandler
    onEndChange: TimeHandler
    onCurrentChange: TimeHandler
}) {
    const start = toSeconds(props.start)
    const current = toSeconds(props.current)
    const end = toSeconds(props.end)
    return (
        <>
            <Slider
                components={{
                    Thumb: ThumbWithClass
                }}
                sx={{
                    '& .MuiSlider-thumb': {
                        borderRadius: 0,
                        width: '3px'
                    },
                    '.current-time-thumb': {
                        color: 'primary.contrastText',
                        boxShadow: '5'
                    }
                }}
                min={0}
                max={toSeconds(props.max)}
                valueLabelFormat={secondsToTimeText}
                valueLabelDisplay='auto'
                value={[start, current, end]}
                disableSwap={true}
                onChangeCommitted={(_, values) => {
                    const [, newCurrent] = values as number[]
                    if (current !== newCurrent) {
                        props.onCurrentChange(fromSeconds(newCurrent))
                    }
                }}
                onChange={(_, values) => {
                    const [newStart, newCurrent, newEnd] = values as number[]
                    if (newEnd - newStart > 1) {
                        if (newStart !== start) {
                            props.onStartChange(fromSeconds(newStart))
                        } else if (newEnd !== end) {
                            props.onEndChange(fromSeconds(newEnd))
                        }
                    }
                    if (current !== newCurrent) {
                        props.onCurrentChange(fromSeconds(newCurrent))
                    }
                }}
            />
        </>
    )
}

export default Bar
