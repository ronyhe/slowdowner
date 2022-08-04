import FileUploader from './FileUploader'
import Bar from './Bar'
import { ZERO } from './time'
import PlayPauseButton from './PlayPauseButton'
import React from 'react'

function Slowdowner() {
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
            <PlayPauseButton status={'paused'} onStatusChange={console.log} />
        </div>
    )
}

export default Slowdowner
