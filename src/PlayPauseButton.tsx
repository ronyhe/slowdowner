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

export type PlayPauseStatus = 'playing' | 'paused'

function flipStatus(status: PlayPauseStatus): PlayPauseStatus {
    if (status === 'playing') {
        return 'paused'
    } else {
        return 'playing'
    }
}

function PlayPauseButton(props: {
    status: PlayPauseStatus
    onStatusChange: (status: PlayPauseStatus) => void
}) {
    const [status, setStatus] = useState(props.status)
    const onClick = () => {
        const newStatus = flipStatus(status)
        props.onStatusChange(newStatus)
        setStatus(newStatus)
    }
    console.log({ status })
    return (
        <>
            <Button variant='contained' component='label' onClick={onClick}>
                {status === 'playing' ? <PauseButton /> : <PlayButton />}
            </Button>
        </>
    )
}

export default PlayPauseButton
