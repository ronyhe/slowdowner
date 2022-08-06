import React, { DependencyList, useEffect, useRef } from 'react'

function useAudioEffect(
    audioRef: React.RefObject<HTMLAudioElement>,
    func: (audio: HTMLAudioElement) => void,
    deps?: DependencyList
) {
    useEffect(() => {
        if (audioRef.current) {
            func(audioRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioRef.current, ...(deps ?? [])])
}

function useAudioEffects(audioRef: React.RefObject<HTMLAudioElement>) {
    return (func: (audio: HTMLAudioElement) => void, deps?: DependencyList) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useAudioEffect(audioRef, func, deps)
    }
}

function Audio(props: { file: File; shouldPlay: boolean }) {
    const ref = useRef<HTMLAudioElement>(null)
    const useAudio = useAudioEffects(ref)
    useAudio(
        audio => {
            audio.src = URL.createObjectURL(props.file)
        },
        [props.file]
    )
    useAudio(
        audio => {
            if (props.shouldPlay) {
                audio.play()
            } else {
                audio.pause()
            }
        },
        [props.shouldPlay]
    )
    return (
        <>
            <audio ref={ref} />
        </>
    )
}

export default Audio
