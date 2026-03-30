import {useCallback, useRef, useState} from 'react'
import type {
    PerformanceInputSource,
    RecordedMidiEvent,
    ParsedMidiMessage,
} from '@shared/lib'
import {mapParsedMidiMessageToRecordedEvent} from './lib'

export function useMidiRecorder() {
    const startedAtMsRef = useRef<number | null>(null)
    const [recordedEvents, setRecordedEvents] = useState<RecordedMidiEvent[]>([])

    const handleMidiMessage = useCallback((
        message: ParsedMidiMessage,
        source: PerformanceInputSource,
    ) => {
        // Prevent feedback loop: playback must not be recorded.
        if (source === 'playback') return

        const now = Date.now()
        if (startedAtMsRef.current === null) {
            startedAtMsRef.current = now
        }

        const atMs = now - (startedAtMsRef.current ?? now)
        const recordedEvent = mapParsedMidiMessageToRecordedEvent({
            source,
            atMs,
            message,
        })

        setRecordedEvents((prev) => [...prev, recordedEvent])
    }, [])

    return {
        recordedEvents,
        handleMidiMessage,
    }
}

