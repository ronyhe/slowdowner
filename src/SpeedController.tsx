import TextField from '@mui/material/TextField'
import React from 'react'

function SpeedController(props: {
    speed: number
    onSpeedChange: (speed: number) => void
}) {
    return (
        <>
            <TextField
                size='small'
                variant='filled'
                label='speed'
                type='number'
                value={props.speed.toFixed(1)}
                inputProps={{
                    step: 0.1
                }}
                onChange={e => {
                    const newSpeed = parseFloat(e.target.value)
                    props.onSpeedChange(newSpeed)
                }}
            />
        </>
    )
}

export default SpeedController
