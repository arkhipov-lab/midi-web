import {detectChordWithDebug} from '../detectChordWithDebug'

describe('detectChordWithDebug', () => {
    it('detects Dsus2', () => {
        const result = detectChordWithDebug({
            62: 100,
            64: 100,
            69: 100,
        })

        expect(result.selected?.symbol).toBe('Dsus2')
    })

    it('detects Dsus4', () => {
        const result = detectChordWithDebug({
            62: 100,
            67: 100,
            69: 100,
        })

        expect(result.selected?.symbol).toBe('Dsus4')
    })

    it('detects C9 without false slash output', () => {
        const result = detectChordWithDebug({
            60: 100,
            64: 100,
            70: 100,
            62: 100,
        })

        expect(result.selected?.symbol).toBe('C9')
    })

    it('detects C6/9', () => {
        const result = detectChordWithDebug({
            60: 100,
            62: 100,
            64: 100,
            67: 100,
            69: 100,
        })

        expect(result.selected?.symbol).toBe('C6/9')
    })

    it('prefers plain major over decorated variants when no signature tones are present', () => {
        const result = detectChordWithDebug({
            38: 100,
            42: 100,
            45: 100,
        })

        expect(result.selected?.symbol).toBe('D')
        expect(result.candidates[0].symbol).toBe('D')
    })

    it('prefers sus2 over add9 when third is absent', () => {
        const result = detectChordWithDebug({
            50: 100,
            52: 100,
            57: 100,
        })

        expect(result.selected?.symbol).toBe('Dsus2')
        expect(result.candidates[0].symbol).toBe('Dsus2')
    })

    it('keeps C9 above C11 and C13 when 11 and 13 are absent', () => {
        const result = detectChordWithDebug({
            48: 100,
            52: 100,
            55: 100,
            58: 100,
            62: 100,
        })

        expect(result.selected?.symbol).toBe('C9')
        expect(result.candidates[0].symbol).toBe('C9')
        expect(result.candidates[1].symbol).not.toBe('C9')
    })
})
