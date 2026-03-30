import React from 'react'
import {
    MidiKeyboard,
    SustainPedalIndicator,
} from './components'
import type {ActiveNotesMap} from '@entities/useMidiPerformanceState'
import {
    MidiKeyboardPanel as StyledMidiKeyboardPanel,
    MidiKeyboardMidiKeyboardContainer,
} from './MidiKeyboardPanel.styles'

interface MidiKeyboardPanelProps {
    pressedNotes: ActiveNotesMap
    soundingNotes: ActiveNotesMap
    sustainPressed: boolean
}

export const MidiKeyboardPanel: React.FC<MidiKeyboardPanelProps> = (props) => {

    const {
        pressedNotes,
        soundingNotes,
        sustainPressed,
    } = props

    return (
        <StyledMidiKeyboardPanel>
            <MidiKeyboardMidiKeyboardContainer>
                <MidiKeyboard
                    pressedNotes={pressedNotes}
                    soundingNotes={soundingNotes}
                />
            </MidiKeyboardMidiKeyboardContainer>

            <SustainPedalIndicator
                pressed={sustainPressed}
            />
        </StyledMidiKeyboardPanel>
    )
}
