import {useCallback} from 'react'
import type {ParsedMidiMessage} from '@shared/lib'
import {useMidiPerformanceState} from '@entities/useMidiPerformanceState'
import {useMidiSynth} from '@entities/useMidiSynth'

export function useMidiEngine() {

    const {
        pressedNotes,
        soundingNotes,
        sustainPressed,
        handleMidiMessage: handleMidiMessageForState,
        activeNotes,
    } = useMidiPerformanceState()

    const {
        handleMidiMessageForAudio,
        resumeAudio,
    } = useMidiSynth(true)

    const handleMidiMessage = useCallback((message: ParsedMidiMessage) => {
        handleMidiMessageForState(message)
        handleMidiMessageForAudio(message)
    }, [handleMidiMessageForState, handleMidiMessageForAudio])

    return {
        pressedNotes,
        soundingNotes,
        sustainPressed,
        handleMidiMessage,
        resumeAudio,
        // Same as soundingNotes
        activeNotes,
    }
}
