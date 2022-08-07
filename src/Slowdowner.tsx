import FileUploader from './FileUploader'
import Bar from './Bar'
import { Time, ZERO } from './time'
import PlayPauseButton, { PlayPauseStatus } from './PlayPauseButton'
import React, { useState } from 'react'
import SpeedController from './SpeedController'
import Audio from './Audio'

function Slowdowner() {
    const [file, setFile] = useState<File | null>(null)
    const [playPauseStatus, setPlayPauseStatus] =
        useState<PlayPauseStatus>('disabled')
    const [speed, setSpeed] = useState(1.0)
    const [currentTime, setCurrentTime] = useState<Time>({
        minutes: 1,
        seconds: 15
    })
    const [startTime, setStartTime] = useState<Time>(ZERO)
    const [endTime, setEndTime] = useState<Time>({ minutes: 3, seconds: 0 })
    const audio = file ? (
        <Audio
            file={file}
            shouldPlay={playPauseStatus === 'playing'}
            onCurrentTimeChange={setCurrentTime}
            speed={speed}
            start={startTime}
            end={endTime}
        />
    ) : null
    return (
        <div style={{ maxWidth: '400px', maxHeight: '150px', margin: '20px' }}>
            <FileUploader
                file={file}
                onFileChosen={file => {
                    setFile(file)
                    setPlayPauseStatus('paused')
                    setCurrentTime(ZERO)
                }}
            />
            <Bar
                onStartChange={setStartTime}
                onEndChange={setEndTime}
                max={{ minutes: 3, seconds: 0 }}
                current={currentTime}
                start={startTime}
                end={endTime}
            />
            <PlayPauseButton
                status={playPauseStatus}
                onStatusChange={setPlayPauseStatus}
            />
            <SpeedController speed={speed} onSpeedChange={setSpeed} />
            {audio}
        </div>
    )
}

export default Slowdowner
