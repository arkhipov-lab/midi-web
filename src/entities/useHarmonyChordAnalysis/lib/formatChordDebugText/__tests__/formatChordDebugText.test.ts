import {formatChordDebugText} from '../formatChordDebugText'

describe('formatChordDebugText', () => {
    it('formats debug text', () => {
        const text = formatChordDebugText({
            inputMidiNotes: [60, 64, 67],
            inputPitchClasses: [0, 4, 7],
            bassMidiNote: 60,
            bassPitchClass: 0,
            selected: {
                root: 'C',
                type: 'major',
                symbol: 'C',
                confidence: 0.9,
                bass: null,
                isSlashChord: false,
            },
            candidates: [],
        })

        expect(text).toContain('CHORD DEBUG')
        expect(text).toContain('symbol: C')
        expect(text).toContain('input midi notes: [60, 64, 67]')
    })

    it('includes omission-aware metrics in debug text', () => {
        const text = formatChordDebugText({
            inputMidiNotes: [60, 67, 70],
            inputPitchClasses: [0, 7, 10],
            bassMidiNote: 60,
            bassPitchClass: 0,
            selected: null,
            candidates: [
                {
                    symbol: 'C7(no3)',
                    type: 'dominant7No3',
                    root: 'C',
                    bass: null,
                    isSlashChord: false,
                    score: 120,
                    priority: 20,
                    breakdown: {
                        matched: 3,
                        missing: 0,
                        extra: 0,
                        matchedRequired: 3,
                        missingRequired: 0,
                        matchedOptional: 0,
                        missingOmittable: 0,
                        matchedSignature: 1,
                        missingSignature: 0,
                        heuristicScore: 20,
                        slashPenalty: 0,
                        rootOwnershipBonus: 18,
                        secondaryRootPenalty: 0,
                        simplicityBonus: 0,
                        inputCoverageBonus: 24,
                        underExplainingPenalty: 0,
                        missingThirdPenalty: 0,
                        incompleteVoicingBonus: 0,
                        omissionBonus: 22,
                        omissionPenalty: 0,
                        finalScore: 120,
                    },
                },
            ],
        })

        expect(text).toContain('omissionBonus=22')
        expect(text).toContain('omissionPenalty=0')
    })
})
