import FileUploader from './FileUploader'
import Bar from './Bar'
import { ZERO } from './time'
import PlayPauseButton from './PlayPauseButton'
import React, { useState } from 'react'

function Slowdowner() {
    const [isPlaying, setIsPlaying] = useState(false)
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
                isPlaying={isPlaying}
                statusChange={is => {
                    console.log(is)
                    setIsPlaying(is)
                }}
            />
        </div>
    )
}

export default Slowdowner
