import FileUploader from './FileUploader'
import Bar from './Bar'
import { Time, timeText, ZERO } from './time'
import PlayPauseButton, { flipStatus, PlayPauseStatus } from './PlayPauseButton'
import React, { useState } from 'react'
import SpeedController from './SpeedController'
import Audio from './Audio'
import Paper from '@mui/material/Paper'
import Text from './Text'

const THREE_MINUTES = { minutes: 3, seconds: 0 }

function Slowdowner() {
    const [file, setFile] = useState<File | null>(null)
    const [playPauseStatus, setPlayPauseStatus] =
        useState<PlayPauseStatus>('disabled')
    const [speed, setSpeed] = useState(1.0)
    const [currentTime, setCurrentTime] = useState<Time>(ZERO)
    const [startTime, setStartTime] = useState<Time>(ZERO)
    const [endTime, setEndTime] = useState<Time>(THREE_MINUTES)
    const [duration, setDuration] = useState<Time>(THREE_MINUTES)
    const audio = file ? (
        <Audio
            file={file}
            shouldPlay={playPauseStatus === 'playing'}
            onCurrentTimeChange={setCurrentTime}
            onDurationChange={duration => {
                setDuration(duration)
                setEndTime(duration)
                setStartTime(ZERO)
                setCurrentTime(ZERO)
            }}
            speed={speed}
            start={startTime}
            end={endTime}
        />
    ) : null
    return (
        <div style={{ maxWidth: '600px', maxHeight: '200px', margin: '20px' }}>
            <Paper elevation={2} sx={{ padding: '20px' }}>
                <FileUploader
                    file={file}
                    onFileChosen={file => {
                        setFile(file)
                        setPlayPauseStatus('paused')
                    }}
                />
                <Bar
                    onStartChange={setStartTime}
                    onEndChange={setEndTime}
                    max={duration}
                    current={currentTime}
                    start={startTime}
                    end={endTime}
                />
                <PlayPauseButton
                    status={playPauseStatus}
                    onClick={() =>
                        setPlayPauseStatus(flipStatus(playPauseStatus))
                    }
                />
                <SpeedController speed={speed} onSpeedChange={setSpeed} />
                {audio}
                <Text sx={{ float: 'right' }}>{timeText(currentTime)}</Text>
            </Paper>
        </div>
    )
}

export default Slowdowner
