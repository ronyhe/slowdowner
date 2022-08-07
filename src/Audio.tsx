import React, { DependencyList, useEffect, useRef } from 'react'
import { after, before, fromSeconds, Time, toSeconds } from './time'

function useAudioEffect(
    audioRef: React.RefObject<HTMLAudioElement>,
    func: (audio: HTMLAudioElement) => void,
    deps?: DependencyList
) {
    useEffect(() => {
        if (audioRef.current) {
            return func(audioRef.current)
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

function Audio(props: {
    file: File
    shouldPlay: boolean
    onCurrentTimeChange: (time: Time) => void
    onDurationChange: (time: Time) => void
    speed: number
    start: Time
    end: Time
}) {
    const ref = useRef<HTMLAudioElement>(null)
    const useAudio = useAudioEffects(ref)
    useAudio(audio => {
        audio.loop = true
    })
    useAudio(
        audio => {
            audio.src = URL.createObjectURL(props.file)
        },
        [props.file]
    )
    useAudio(
        audio => {
            const listener = () => {
                props.onDurationChange(fromSeconds(audio.duration))
            }
            audio.addEventListener('durationchange', listener)
            return () => {
                audio.removeEventListener('durationchange', listener)
            }
        },
        [props.onDurationChange]
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
    useAudio(
        audio => {
            const listener = () => {
                const currentTime = fromSeconds(audio.currentTime)
                if (
                    before(currentTime, props.start) ||
                    after(currentTime, props.end)
                ) {
                    audio.currentTime = toSeconds(props.start)
                }
                props.onCurrentTimeChange(currentTime)
            }
            audio.addEventListener('timeupdate', listener)
            return () => {
                audio.removeEventListener('timeupdate', listener)
            }
        },
        [props.start, props.end, props.onCurrentTimeChange]
    )
    useAudio(
        audio => {
            audio.playbackRate = props.speed
            audio.defaultPlaybackRate = props.speed
        },
        [props.speed]
    )
    return (
        <>
            <audio ref={ref} />
        </>
    )
}

export default Audio
