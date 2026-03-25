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

    it('includes signature metrics in debug text', () => {
        const text = formatChordDebugText({
            inputMidiNotes: [60, 64, 67],
            inputPitchClasses: [0, 4, 7],
            bassMidiNote: 60,
            bassPitchClass: 0,
            selected: null,
            candidates: [
                {
                    symbol: 'C',
                    type: 'major',
                    root: 'C',
                    bass: null,
                    isSlashChord: false,
                    score: 100,
                    priority: 10,
                    breakdown: {
                        matched: 3,
                        missing: 0,
                        extra: 0,
                        matchedRequired: 3,
                        missingRequired: 0,
                        matchedOptional: 0,
                        missingOmittable: 0,
                        matchedSignature: 0,
                        missingSignature: 0,
                        heuristicScore: 40,
                        finalScore: 100,
                    },
                },
            ],
        })

        expect(text).toContain('matchedSignature=0')
        expect(text).toContain('missingSignature=0')
    })
})
