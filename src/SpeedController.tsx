import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

function SpeedController(props: {
    speed: number
    onSpeedChange: (speed: number) => void
}) {
    const [speed, setSpeed] = useState(props.speed)
    return (
        <>
            <TextField
                size='small'
                variant='filled'
                label='speed'
                type='number'
                value={speed.toFixed(1)}
                inputProps={{
                    step: 0.1
                }}
                onChange={e => {
                    const newSpeed = parseFloat(e.target.value)
                    props.onSpeedChange(newSpeed)
                    setSpeed(newSpeed)
                }}
            />
        </>
    )
}

export default SpeedController
