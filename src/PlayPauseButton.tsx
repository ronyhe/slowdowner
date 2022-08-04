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

function PlayPauseButton(props: {
    isPlaying: boolean
    statusChange: (isPlaying: boolean) => void
}) {
    const [isPlaying, setIsPlaying] = useState(props.isPlaying)
    const onClick = () => {
        setIsPlaying(!isPlaying)
        props.statusChange(!isPlaying)
    }
    return (
        <>
            <Button variant='contained' component='label' onClick={onClick}>
                {isPlaying ? <PauseButton /> : <PlayButton />}
            </Button>
        </>
    )
}

export default PlayPauseButton
