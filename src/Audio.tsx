import React, { useEffect, useRef } from 'react'

function Audio(props: { file: File; shouldPlay: boolean }) {
    const ref = useRef<HTMLAudioElement>(null)
    const audio = ref.current
    useEffect(() => {
        if (audio) {
            audio.src = URL.createObjectURL(props.file)
        }
    }, [audio, props.file])
    useEffect(() => {
        if (audio) {
            if (props.shouldPlay) {
                audio.play()
            } else {
                audio.pause()
            }
        }
    }, [audio, props.shouldPlay])
    return (
        <>
            <audio ref={ref} />
        </>
    )
}

export default Audio
