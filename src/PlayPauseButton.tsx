import React, { useState } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import Button from '@mui/material/Button'

function PauseButton() {
    return <PauseCircleIcon fontSize='large' />
}

function PlayButton() {
    return <PlayCircleIcon fontSize='large' />
}

export type PlayPauseStatus = 'playing' | 'paused' | 'disabled'

export function flipStatus(status: PlayPauseStatus): PlayPauseStatus {
    if (status === 'playing') {
        return 'paused'
    } else {
        return 'playing'
    }
}

function PlayPauseButton(props: {
    status: PlayPauseStatus
    onClick: () => void
}) {
    return (
        <>
            <Button
                variant='contained'
                component='label'
                onClick={() => props.onClick()}
                disabled={props.status === 'disabled'}
            >
                {props.status === 'playing' ? <PauseButton /> : <PlayButton />}
            </Button>
        </>
    )
}

export default PlayPauseButton
