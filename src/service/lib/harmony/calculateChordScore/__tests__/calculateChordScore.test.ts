import {calculateChordScore} from '../calculateChordScore'

describe('calculateChordScore', () => {
    it('penalizes missing signature intervals', () => {
        const withoutSignature = calculateChordScore({
            inputPitchClasses: [0, 4, 7],
            templatePitchClasses: [0, 2, 4, 7],
            requiredPitchClasses: [0, 4, 7],
            optionalPitchClasses: [2],
            omittablePitchClasses: [],
            signaturePitchClasses: [2],
            bassPitchClass: 0,
            rootPitchClass: 0,
            templatePriority: 15,
            category: 'triad',
            requiresSeventh: false,
        })

        const withSignature = calculateChordScore({
            inputPitchClasses: [0, 2, 4, 7],
            templatePitchClasses: [0, 2, 4, 7],
            requiredPitchClasses: [0, 4, 7],
            optionalPitchClasses: [2],
            omittablePitchClasses: [],
            signaturePitchClasses: [2],
            bassPitchClass: 0,
            rootPitchClass: 0,
            templatePriority: 15,
            category: 'triad',
            requiresSeventh: false,
        })

        expect(withSignature.finalScore).toBeGreaterThan(withoutSignature.finalScore)
        expect(withoutSignature.missingSignature).toBe(1)
        expect(withSignature.matchedSignature).toBe(1)
    })
})
