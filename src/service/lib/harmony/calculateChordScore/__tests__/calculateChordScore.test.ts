import {calculateChordScore} from '../calculateChordScore'

describe('calculateChordScore', () => {
    it('penalizes slash chords compared to direct root ownership', () => {
        const direct = calculateChordScore({
            inputPitchClasses: [0, 4, 7, 10, 2],
            templatePitchClasses: [0, 2, 4, 7, 10],
            requiredPitchClasses: [0, 4, 10],
            optionalPitchClasses: [2, 7],
            omittablePitchClasses: [7],
            signaturePitchClasses: [2],
            bassPitchClass: 0,
            rootPitchClass: 0,
            templatePriority: 24,
            category: 'extended',
            requiresSeventh: true,
            isSlashChord: false,
        })

        const slash = calculateChordScore({
            inputPitchClasses: [0, 4, 7, 10, 2],
            templatePitchClasses: [4, 7, 10, 0],
            requiredPitchClasses: [4, 7, 10, 0],
            optionalPitchClasses: [],
            omittablePitchClasses: [],
            signaturePitchClasses: [10, 0],
            bassPitchClass: 0,
            rootPitchClass: 4,
            templatePriority: 21,
            category: 'seventh',
            requiresSeventh: false,
            isSlashChord: true,
        })

        expect(direct.finalScore).toBeGreaterThan(slash.finalScore)
        expect(slash.slashPenalty).toBeGreaterThan(0)
        expect(direct.rootOwnershipBonus).toBeGreaterThan(slash.rootOwnershipBonus)
    })

    it('rewards bass equal to root more than root only present above bass', () => {
        const bassOwned = calculateChordScore({
            inputPitchClasses: [2, 6, 9],
            templatePitchClasses: [2, 6, 9],
            requiredPitchClasses: [2, 6, 9],
            optionalPitchClasses: [],
            omittablePitchClasses: [],
            signaturePitchClasses: [],
            bassPitchClass: 2,
            rootPitchClass: 2,
            templatePriority: 10,
            category: 'triad',
            requiresSeventh: false,
            isSlashChord: false,
        })

        const rootNotInBass = calculateChordScore({
            inputPitchClasses: [2, 6, 9],
            templatePitchClasses: [6, 9, 2],
            requiredPitchClasses: [6, 9, 2],
            optionalPitchClasses: [],
            omittablePitchClasses: [],
            signaturePitchClasses: [],
            bassPitchClass: 2,
            rootPitchClass: 6,
            templatePriority: 10,
            category: 'triad',
            requiresSeventh: false,
            isSlashChord: true,
        })

        expect(bassOwned.rootOwnershipBonus).toBeGreaterThan(rootNotInBass.rootOwnershipBonus)
    })
})
