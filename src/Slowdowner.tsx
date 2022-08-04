import FileUploader from './FileUploader'
import Bar from './Bar'
import { ZERO } from './time'
import PlayPauseButton, { PlayPauseStatus } from './PlayPauseButton'
import React, { useState } from 'react'

function Slowdowner() {
    const [playPauseStatus, setPlayPauseStatus] =
        useState<PlayPauseStatus>('paused')
    return (
        <div style={{ maxWidth: '400px', maxHeight: '150px', margin: '20px' }}>
            <FileUploader
                file={null}
                onFileChosen={(file: File) => {
                    console.log(file)
                }}
            />
            <Bar
                onStartChange={console.log}
                onEndChange={console.log}
                max={{ minutes: 3, seconds: 0 }}
                current={{ minutes: 1, seconds: 15 }}
                start={ZERO}
                end={{ minutes: 3, seconds: 0 }}
            />
            <PlayPauseButton
                status={'paused'}
                onStatusChange={setPlayPauseStatus}
            />
        </div>
    )
}

export default Slowdowner
